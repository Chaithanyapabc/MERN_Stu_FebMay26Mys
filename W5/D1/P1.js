//Introduction to Node.js
const runtimeName = "Node.js";
console.log("Introduction to Node.js");
console.log(`${runtimeName} runs javascript outside the browser`);

const commonUses = [
    "used for server-side application",
    "autoation javascripts can be created"
];
//array desctructuring
//console.log(commonUses);
// console.log(commonUses[0]);
// console.log(commonUses[1]);
commonUses.forEach((commonUse,index) => {
    console.log(`${index+1}.${commonUse}`);
})