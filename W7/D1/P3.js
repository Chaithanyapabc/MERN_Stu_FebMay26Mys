//Handling different HTTP methods in express

const express = require("express");

const app = express();

app.get("/users",function(req,res){
    res.send("Returning all Users");
});

//To create 
app.post("/users",function(req,res){
    //res.status() sets the HTTP status code of the response body
    res.status(201).send("User created.");
});
//curl -X POST http://localhost:4000/users
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});
