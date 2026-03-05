//Array basics
console.log("Array Basics");
//creating arrays
let emptyArray = [];
let numArray = [1, 2, 3, 4];
let mixedArray = [40, "Hello", true, null,{ name: "Alice"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using Constructor
let fruits = new Array("Apple", "Banana", "Cherry");
console.log(fruits);
console.log("Is fruits an array? " + Array.isArray(fruits));

//Push:Add
fruits.push("Date");
console.log(fruits);

//Pop:remove
fruits.pop();

//unshift: add to beginning
fruits.unshift("Orange");
console.log(fruits);

//shift: remove from beginning
fruits.shift();
console.log(fruits);