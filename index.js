const server = require('./src/server');



server.listen(3001, () => {
    console.log("Listening in port", 3001)
})