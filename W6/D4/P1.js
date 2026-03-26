//Understanding the http module

//Importing built-in http modules
const http = require("http");//commonJS:require

console.log("Type of http.createServer:",typeof http.createServer);
console.log("Common http methods:",http.METHODS);