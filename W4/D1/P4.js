// Logging 

console.log("Console Logging");

console.warn("Warning message");

console.error("Error message");

let users = [
    {id:1,name:"Chaithanya"},
    {id:2,name:"Keerthi"}
]
console.log(users);
console.table(users);

// Group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// Measure execution time
console.time("LoopTimer");
for(let i=0 ; i<1000 ; i++){}
console.timeEnd("LoopTimer");