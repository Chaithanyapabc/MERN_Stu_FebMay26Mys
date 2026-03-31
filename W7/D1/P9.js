//Middleware chaining and error handling middleware

const express=require("express")
const app=express()

//First middleware 
//Global middleware
app.use(function(req,res,next){
    console.log("Request:",req.method,req.url)
    next();
    //next()=>onces this completes it triggers next 
})

app.use(function(req,res,next){
    req.requestSource="middleware-chain-example"
    next();
});

app.get("/ok",function(req,res){
    res.json({
        success:true,
        source:req.requestSource
    });
});

app.get("/fail",function(req,res){
    next(new Error("Route failure"))
});
//error handling : global error 
app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});