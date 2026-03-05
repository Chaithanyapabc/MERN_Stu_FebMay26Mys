//Array iteration
console.log("Array Iteration");
let numArray = [1, 2, 3, 4];
//for Loop
for(let i = 0; i < numArray.length; i++){
    console.log(" " , numArray[i]);
}
//for...of Loop
for(let num of numArray){
    console.log(" " , num);
}
//forEach method
numArray.forEach((val,idx) => {
    console.log(" " ,idx, val);
});