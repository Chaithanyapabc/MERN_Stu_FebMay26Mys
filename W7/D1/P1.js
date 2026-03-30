//Basics of ExpressJS - setup
//npm init -y
//npm install express

//import modules of express
const express = require("express");
//calling express() creates the main application object
//This object is used to register routes and middleware
const app = express();

//app.get() is used to handles GET requests for a specific path
app.get("/",function(req,res){
    //res.send() is sends a response body and ends the request automatically
    res.send("Hello from Express server");
});

//listen() starts the server on a choosen port number
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});