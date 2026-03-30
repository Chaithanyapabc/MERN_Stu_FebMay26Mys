//Basic routing in express
//import modules of express
const express = require("express");
//calling express() creates the main application object
//This object is used to register routes and middleware
const app = express();

app.get("/",function(req,res){
    res.send("Hello from Express server");
});

app.get("/about",function(req,res){
    res.send("About route in Express server");
});
app.get("/products",function(req,res){
    res.send("products route in Express server");
});

app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});