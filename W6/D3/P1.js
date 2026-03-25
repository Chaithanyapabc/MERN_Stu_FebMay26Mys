//Introduction to the NodeJS File system (fs) built-in module
const fs = require("fs");
const fsPromises = require("fs/promises");

console.log("Type of fs.readFile:",typeof fs.readFile); //is the function
console.log("Type of fs.write:File",typeof fs.writeFile);

console.log("Type of fsPromises.readFile:",typeof fsPromises.readFile);
console.log("Type of fsPromises.write:File",typeof fsPromises.writeFile);