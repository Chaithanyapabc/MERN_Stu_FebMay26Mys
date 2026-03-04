//json stringify parse
const employee = {
    id:101,
    name:"Chaithanya",
    department:"IT",
    isActive:true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

//json parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);