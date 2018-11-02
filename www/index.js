
//require app
const app = require("../app");


//get http module
const http = require("http");


//declare port
port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,()=>console.log(`APP STARTED IN ${process.env.NODE_ENV.toUpperCase()} ON PORT ${port}`));
