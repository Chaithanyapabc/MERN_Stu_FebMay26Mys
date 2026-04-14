//Validation and schema constraints

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    age:{type:Number,min:18},
    role:{type:String,
        enum: ["admin","user","manager"]
    },
    email:{
        type:String,
        match:/.+@.+\..+/       // (.) indecates (+) indecates
        //word@domainname.com  .co.in /.org/.edu.in
    } 
});

const User =mongoose.model("HookValidationUser",userSchema);

async function runValidationDemo(){
    try{
        //await invalidUser.validate();
        const invalidUser = new User({
            name:"Chaithanya",
            age:19,
            role:"admin",
            email:"c@c.com"
        });

        await invalidUser.validate();
    }
    catch(error){
        console.log("Validation errors found:");

        for(const fieldName in error.errors){
            console.log(fieldName+":", error.errors[fieldName].message);
        }
    }
}

runValidationDemo();