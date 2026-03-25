//Reading and writing  files asynchronously with callbacks

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "async-note.txt");

//to write to a file
fs.writeFile(filePath, "This is written asynchronously using writeFile().", function (writError) {
    if (writError) {
        console.log("Write error: ", writError.message);
        return;
    }
    console.log("File written asynchronously.");
})

const content = fs.readFile(filePath, "utf-8", function (readError, content) {
    if(readError){
        console.log("Read error:", readError.message);
        return;
    }
    console.log(content);
});

console.log("Script continues while file operations are in progress.")