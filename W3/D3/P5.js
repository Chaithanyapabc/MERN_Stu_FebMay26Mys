//Basics of objects in JavaScript
const person = {
    name : "P Chaithanya",
    age : 22,
    isStudent : true
};
//console.log("Person :",person);
console.log("Name :",person.name);
console.log("Age :",person["age"]);
console.log("Is Student :",person["isStudent"]);

//Add a new property
person.city = "Mysore";
console.log("Person :",person);

//Modify an existing property
person.age = 23;
//delete a property
delete person.isStudent;
console.log("Person :",person);
//Object Constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;
console.log("Car :",car);