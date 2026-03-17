//Promise states: pending, fullfilled, rejected
const fulfilledPromise = new Promise(function(resolve){
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        resolve("fullfilledPromise is fullfilled");
    },1000);
});

const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        reject("rejectedPromise is pending.");
    },1500);
});
fulfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
})