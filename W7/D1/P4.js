//Middleware usage in ExpressJS
//Middleware runs during the request-responce cycle
//MiddleWare can inspect or change the request before a route responds
//next() passes control to the next step middleware function 
const express = require("express");

const app = express();

//app.use() it resistrs middleware.
//this miffleware reuns for every incoming request
app.use(function(req,res,next){
    console.log("Request recieved",req.method,req.url);
    //next() is used to pass control to the next middleware function in the stack
    next();
});
app.get("/",function(req,res){
    res.send("Middleware executed before the route.");
});
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});