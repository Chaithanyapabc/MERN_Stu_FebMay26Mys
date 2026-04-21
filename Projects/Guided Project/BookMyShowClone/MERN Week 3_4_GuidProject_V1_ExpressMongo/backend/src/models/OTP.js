const { default: mongoose, Types } = require("mongoose");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowerCase:true,
        index:true,
    },
    otp:{
        type:String,
        required:true,
        select:false,
    },
    expiredAt:{
        type:Date,
        required:true,
    },
    attempts:{
        type:Number,
        default:0,
    },
},{
    timestamps:true,
});

//TTL index
otpSchema.index({expiresAt:1},{expireAfterSeconds:0});

//Export
module.exports=mongoose.model("OTP",otpSchema);