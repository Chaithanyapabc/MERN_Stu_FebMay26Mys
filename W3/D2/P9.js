//Immediately Invoked Function Expression (IIFE)
//w/o Parameters
(function(){
    console.log("Basic IIFE executed immediately!");
})();
//with Parameters
(function(appName,version){
    console.log("APP:",appName,"Version:",version);
})("NodeJS", "v22.22.0");

//with Return Value
const result = (function(){
    const a = 10, b = 20;
    return a + b;
})();
console.log("Sum is :", result);