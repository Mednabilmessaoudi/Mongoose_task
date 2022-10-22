//modules importations
const express = require('express');
const configdb = require('./config/config');
const routes = require ('./routes/routes');
const server = express();
const port = 3550

//Using json format in the req and res
server.use(express.json())
server.use("/person", routes);

//Call Database connection
configdb();
//// server listen
server.listen(port,err=>{
err?console.log(err):console.log(`server is running on http://localhost:${port}`);;


})