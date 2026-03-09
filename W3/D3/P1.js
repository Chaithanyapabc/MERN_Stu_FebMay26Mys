//For Loop 
console.log("For Loop examples");
for (let i = 0; i < 5; i++) { //i++ is the increment operator //forward loop
    console.log("i= ", i);
}

for (let i = 5; i > 0; i--) { //i-- is the decrement operator //backward loop
    console.log("i= ", i);
}

//Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i= ${i}, j= ${j}`);
    }
}