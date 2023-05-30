const server = require('./src/server');
// const { connection } = require('./src/database');

// connection.sync({ alter: false })
// .then(() => {})
// .catch((err) => console.log(err));

server.listen(3001, () => {
    console.log("Listening in port", 3001)
})