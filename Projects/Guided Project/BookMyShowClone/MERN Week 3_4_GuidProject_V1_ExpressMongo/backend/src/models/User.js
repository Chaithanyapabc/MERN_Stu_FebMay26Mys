const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,//trim is for remove extra spaces
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,//unique is for email should not repeat
        lowercase:true,//even if we enter in upper case it converts and stores in lower case
        match:[/^\S+@\S+\.\S+$/,"please use a valid email"],
        index:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:6,
        select:false,//hides the password 
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false,
    }

},
{
    timestamps:true
}
)
//Hash password before save
userSchema.pre("save",async function () {
    if(!this.isModified("password")){
        return
    }
    try{
        const saltRounds=10;
        this.password=await bcrypt.hash(this.password,saltRounds)
    }
    catch(error){
        throw error
    }
    
})

//compare password function
userSchema.methods.comparePassword=async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports=mongoose.model("User",userSchema)