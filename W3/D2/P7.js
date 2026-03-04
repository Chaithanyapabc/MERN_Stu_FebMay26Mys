//Arrow Functions
(args) => {
    //function body
}
//Add two numbers
const sum = (a, b) => {
    return a + b;
}
//console.log("3+5: ", sum(3, 5));
let result = sum(3, 5);
console.log("3+5: ", result);
//Single Line return/implicit return
const square = x => x * x;
console.log("Square of 44: ", square(44));

const sayHello = () => console.log("Hello from Arrow Function!");
sayHello();