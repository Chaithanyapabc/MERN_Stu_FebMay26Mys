//Higher order functions
//1. A function that takes another function as an Parameter
//or
//2. A function that returns another function
function createMultiplier(factor){
    return function(number){
        return number * factor;
    };
}
let double = createMultiplier(2);
console.log("Double(10): ", double(10));
let triple = createMultiplier(3);
console.log("Triple(30): ", triple(30));