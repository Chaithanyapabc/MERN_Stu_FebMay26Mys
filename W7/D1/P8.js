//Route parameters and query parameters
//Route parameters : capture dynamic values from the path
//query parameters : provide optional values

const express = require("express");
const app = express();

app.get("/products/:id",function(req,res){
    res.json({
        routeParameter:req.params.id,
        queryParameter:req.query
    });
});
//http://localhost:4000/products/:id
//http://localhost:4000/products/1?name=chaithanya&role=admin
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});