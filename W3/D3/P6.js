//Nested Objects
const student = {
    firstName: "P",
    lastName: "Chaithanya",
    score:{
        math: 85,
        science: 90,
        literature: 78
    },
    habbies: ["Reading", "Singing", "Gaming"],
    fullname: function(){
        return this.firstName + " " + this.lastName;
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
console.log(student.score.math);
student.greet();