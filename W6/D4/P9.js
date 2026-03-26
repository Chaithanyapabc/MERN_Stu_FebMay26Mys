//Routing parameters using manual path parsing
//Here we learn  to extract dynamic values from url path

const http=require("http");

const server=http.createServer(function(req,res){
    if(req.method==="GET" && req.url.startsWith("/users/")){
        //split the path and pick the last section as route parameter
        const parts=req.url.split("/");
        const userId=parts[2];

        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify({
            route:"/users/:id",
            userId: userId
        }));
        return;
    }
    //404 : URL route is valid but the method is not supported
    res.writeHead(405,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"method not allowed"}));

    res.writeHead(404,{"Content-type":"application/json"});
    res.end(JSON.stringify({message:"Route not found"}));
});
//http://localhost:3003/users/40
server.listen(3003,function(){
    console.log("Server is running at http://localhost:3003");

});