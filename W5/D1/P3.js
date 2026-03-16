console.log("Node JS architecture demo");
console.log("1.Script started");

//setTimeOut
setTimeout(()=>{
    console.log("3.Timer callback finished after waiting");
},10000);
console.log("2.Script continue without waiting for timer callback");