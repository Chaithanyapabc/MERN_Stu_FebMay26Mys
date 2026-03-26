// Creating a simple HTTP server

const http = require("http");

//Create sever(): create a HTTP server instance
//Accepts a callback with two importent objects:
//1. req : incoming request details
//2. res : outgoing response control

const server = http.createServer(function(req,res){
    //writeHead() : is function set the response status code and headers
    res.writeHead(200,{"Content-type":"text/plain"});
    //end() : sends the response body and closes the response
    res.end("Hello from NodeJS HTTP server.");
});

//listen() binds the server to a port and starts acceptin requests
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
});

//Port numbers : 
//0-1023 : System ports
//1024 - 49151 : "Registered ports"
    //27017 : mongoDB
    //3000/3001 start from 3000 as a port number