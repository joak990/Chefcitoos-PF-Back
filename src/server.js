const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const server = express();


// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: "TEST-5960402983418929-060820-969d789c69c20e1c6d8095148628460a-274974881",
});


server.use(bodyParser.json());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // Change for your port
  res.header("Access-Control-Allow-Origin", "*"),
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next()
});

// All routes
const router = require("./routes");
server.use("/", router);

module.exports = server;