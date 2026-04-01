//Handling Synchronous Errors
const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Visit /check?id=10 or /check without id");
});

app.get("/check",function(req,res,next){
    try{//Synchronous validation check
        if(!req.query.id){
            throw new Error("Query parameter 'id' is required");
        }
        res.json({
            success:true,
            id:req.query.id
        });
    }
    catch(error){
        //Forword the error to centtralized error middleware
        next(error);
    }
});
//Centralized handling middleware
app.use(function(error,req,res,next){
    res.status(404).json({
        success:false,
        message:error.message
    });
});
//http://localhost:4000/
//http://localhost:4000/check?id=10
//http://localhost:4000/check?
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});