//Reading and writing file synchronously
const fs=require("fs")
const path= require("path")

const filePath=path.join(__dirname,"sync-note.txt")

//fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block execution")
//Append to a file 
fs.appendFileSync(filePath," New text added using fs.appendFile.",
    function(error){
        if(error){
            console.log("Append Error:",error.message)
            return
        }
        console.log("File content Appended:")
    }
)

console.log("file written synchronously.")

//for read operation
const content = fs.readFileSync(filePath,"utf-8")

console.log("File read synchronously.")
console.log("File Content:\n",content)