//Sending json to responce in express

const express = require("express");

const app = express();

app.get("/api/status",function(req,res){
    //res.JSON() automaticaly serealizes the object and sets the JSON content type header
    res.json({
        success : true,
        message : "Express API is working"
    });
});

app.get("/api/error",function(req,res){
    //res.JSON() automaticaly serealizes the object and sets the JSON content type header
    res.status(404).json({
        success : false,
        message : "Requested resource not found"
    });
});
//http://localhost:4000/api/status
//http://localhost:4000/api/error
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});