//Reading the post request body data
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/submit" && req.method === "POST") {
        let body = "";
        //req here is a readable stream
        req.on("data", function (chunk) {
            body += chunk.toString();
        });
        //"end" executes when the full request body has been recieved
        req.on("end", function () {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Recived req body data:" + body);
        });
        return;
    }
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found.");
});
//curl -X POST http://localhost:3001/submit -d "name=Chaithanya&role=admin"
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001"); //localhost:3001 is the base URL
});