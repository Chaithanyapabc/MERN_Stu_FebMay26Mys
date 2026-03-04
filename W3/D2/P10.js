//call back function
//Is a function that is passed as an argument to another function and is executed after some operation is completed.
function greetUser(name, callback){
    console.log("Hello, "+name+"!");
    callback();
}
greetUser("Chaithanya", function(){
    console.log("Callback function executed");
});