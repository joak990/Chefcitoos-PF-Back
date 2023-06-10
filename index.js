require('dotenv').config();

const server = require('./src/server');

server.get("/", (req, res) => {
    res.send ({ msg: "Hola Chefcitoos"})
  })

server.listen(process.env.PORT, () => {
    console.log("Listening in port", process.env.PORT)
})