//Reduce function or method
let nums = [5,10,15];

let total = nums.reduce((a,b) => a+b,0);
console.log(total);

let total1 = nums.reduce((intermediateSum,current) => intermediateSum+current,0);
console.log(total1);

let average = nums.reduce((a,b) => a+b,0)/nums.length;
console.log(average);

//reduce to object count in a category
let items = ["pen", "pencil", "erraser", "sharpener"];
let count = items.reduce((a,b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
}, {});
console.log("Items count:",count);

//naming the parameters in reduce function
let items1 = ["pen", "pencil", "erraser", "sharpener"];
let count1 = items1.reduce((intermediateValue,currentItem) => {
    intermediateValue[currentItem] = (intermediateValue[currentItem] || 0) + 1;
    return intermediateValue;
}, {});
console.log("Items count:",count1);
