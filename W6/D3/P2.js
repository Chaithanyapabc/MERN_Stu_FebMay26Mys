//Reading & writing files synchronously

const fs = require("fs");
const path = require("path");
//__dirname is the current node directory
const filePath = path.join(__dirname,"sync-note.txt");

//Syntax for function usage in madule
//moduleName.functionName()

//write operating function in synchronous way 
fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block execution");

console.log("File written synchronously.");

const content = fs.readFileSync(filePath,"utf-8");

console.log("File read synchronously.");
console.log(content);