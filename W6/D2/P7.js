// setImmediate vs setTimeout

console.log("scheduling setTimeout and setImmediate");

//callback timer
setTimeout(()=>{
    console.log("Timer callback from setTimeout");
},1000)

//setImmediate callback
setImmediate(function(){
    console.log("setImmediate callback executed.");
})

console.log("Both callbacks are now waiting for the event loop");