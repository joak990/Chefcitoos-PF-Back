require('dotenv').config();

const server = require('./src/server');

server.get("/", (req, res) => {
    res.send ({ msg: "Hola Chefcitoos"})
  })

server.listen(3001, () => {
    console.log("Listening in port", 3001)
})