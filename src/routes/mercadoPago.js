const server = require('express');
const router = server.Router();
const mercadopago = require('mercadopago');
const { updateState } = require('../controllers/orders');

router.post("/create_preference", (req, res) => {
  const urlFrontend = "https://chefcitoos.vercel.app"
  const urlBackend = "https://chefcitoos-pf-back.up.railway.app"
    console.log('sosososos')
    let preference = {
      items: [ 
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
          id: Number(req.body.order_id)
        },
      ],
      back_urls: {
        success: `${urlFrontend}/result/order/${req.body.order_id}`,
        failure: `${urlFrontend}/result/order/${req.body.order_id}`,
        pending: `${urlFrontend}/result/order/${req.body.order_id}`,
      },
      auto_return: "approved",
      binary_mode: true,
      notification_url: `${urlBackend}/mercadoPago/feedback`,
    };

    console.log(JSON.stringify(req.body));
    console.log(JSON.stringify(preference));
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

router.post("/feedback", async (req, res) => {
  const { query } = req
  const topic = query.topic || query.type
  if(topic === 'payment') {
    const payment_id = query.id || query["data.id"];
    let payment = await mercadopago.payment.findById(Number(payment_id))
    const status = payment.body.status;
    await updateState(payment.body.additional_info.items[0].id, status === "approved" ? "Pagada" : "Cancelada", payment_id);
  }
  res.json({message: "Order updated"});
});

module.exports = router;