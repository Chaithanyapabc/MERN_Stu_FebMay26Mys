//try catch basics
//const err = document.getElementById("error") 
// try{
//     console.log("Trying to access undefined variable");
//     console.log(notDefined);
// }
// catch(err){
//     console.log("Error caught",err.name,"-",err.message);
//     //err.innerHTML = "1 Trying to access undefined variable";
//     err.textContent = "2 Trying to access undefined variable";
// }
// console.log("Program Execution Continues");
// //Json Parsing error
// let jsonText = "{ JSON }";
// try{
//     let data = JSON.parse(jsonText);
//     console.log("data");
// }
// catch(err){
//     console.log("JSON parse error",err.message);
// }

try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caugh error:",err.name);
}
