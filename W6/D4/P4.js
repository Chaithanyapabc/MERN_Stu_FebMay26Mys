//Handling difference GET routes
const http = require("http");
const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"Conteent-type":"trxt/plain"});
        res.end("Home Page / Dashbord");
        return;
    }
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200,{"Conteent-type":"trxt/plain"});
        res.end("About Route. Welcome to about Us Page.");
        return;
    }
    if(req.method === "GET" && req.url === "/products"){
        res.writeHead(200,{"Conteent-type":"trxt/plain"});
        res.end("products Route. Welcome to products Page.");
        return;
    }
    if(req.method === "GET" && req.url === "/users"){
        res.writeHead(200,{"Conteent-type":"trxt/plain"});
        res.end("Returning all users.");
        return;
    }
    //POST = create
    //curl -X POST http://localhost:3001/users
    //curl : Client URL : free,open src cli tool used to transfer data to or from server using various network protocol.
    if(req.method === "POST" && req.url === "/users"){
        res.writeHead(201,{"Conteent-type":"trxt/plain"});
        res.end("New user created");
        return;
    }
    //Unknown route fallback
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("Route not found")
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001"); //localhost:3001 is the base URL
});