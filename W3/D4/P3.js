//Array map method
console.log("Array Map Method");
let numArray = [1, 2, 3, 4];
//Using map to create a new array with squares of the numbers
let squaredArray = numArray.map(num => num * num);
console.log("Squared Array: ", squaredArray);

let prices= [100, 200, 300,400];
let priceWithGST = prices.map(price => price * 0.18);
console.log("Price with GST: ", priceWithGST);
console.log("Price w/o GST: ", prices);

//Using map to extract files
let users =[
    { name: "Alice", age: 30},
    { name: "Bob", age: 25}
];
let names = users.map(user => user.name);
console.log(" ", names);
