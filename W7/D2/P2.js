//Third party middleware 
//third party middleware are available @ npm registry
const express=require("express");

const morgan=require("morgan");

const cors=require("cors");

const app=express();

//app.use(morgan("dev")) means we gonna use this only during development phase
app.use(morgan("dev"));

// app.use(cors()) means we gonna use this even in  production time means live
//cors
app.use(cors());

app.get("/",function(req,res){
    res.json({
        message: "Third-party middleware executed before this response",
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});