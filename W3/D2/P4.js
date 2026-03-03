/*//conditional statements
let age = 20;
if(age < 13){
    console.log("Child");
}
else if(age < 18){
    console.log("Teenager");
}
else{
    console.log("Adult");
}
*/


/*//switch statement
console.log("Switch Statements");
const day = "Tuesday";
switch(day){
    case "Monday":
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("mid of the week");
        break;
        case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Some day in the week");
        break;
}
*/



//Type conversion
console.log("Type Conversion");
let n = Number("ABC");
console.log("n: ", n, "Type of n: ", typeof n, "isNAN: ", isNaN(n));