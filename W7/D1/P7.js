//Built-in Middleware
const express = require("express");

const app = express();

app.use(express.json());
//express.urlencoaded() parsed form-style data
//extended : false is a biginer friendly config
app.use(express.urlencoded({extended:false}));

app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parsedBody:req.body 
    });
});

app.post("/forms",function(req,res){
    res.json({
        success:true,
        FormData:res.body 
    });
});
//curl -X POST http://localhost:4000/api/users -H "Content-Type:application/json/n" -d "{\"name\":\"Chaithanya\",\"role\":\"admin\" 
//curl -X POST http://localhost:4000/api/users -H "Content-Type:application/X-www-form-urlencoaded" -d "name=Rakesh&role=admin"
app.listen(4000,function(){
    console.log("Express server is running at http://localhost:4000");
});