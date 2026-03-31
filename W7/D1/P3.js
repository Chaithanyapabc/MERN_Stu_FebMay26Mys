// Handling different HTTP methods in express
const express=require("express");
const { message } = require("statuses");

const app=express();

//To read
app.get("/users",function(req,res){
    res.status(200).json([{message:"Success"},
        {id:1,name:"Kavya"},
        {id:2,name:"Bipin"},
        {id:3,name:"Keerthi"},
    ]);
    res.send("Returning all users");
});

//To create
app.post("/users",function(req,res){
    // res.status() sets the HTTP status code before sending the response
    res.status(201).send("User created.")
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});