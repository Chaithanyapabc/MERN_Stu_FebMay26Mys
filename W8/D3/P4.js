// Basics of embedding and referencing

const mongoose = require("mongoose");

async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to mongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });

        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema] //embeded document
        });

        const User = mongoose.model("User",userSchema);
        const embeddedUser = await User.create({
            name:"Chaithanya",
            orders:[
                {product:"Laptop",price:50000},
                {product:"Printer",price:10000},
                {product:"Projector",price:70000},
            ]
        });
        console.log("User:\n");
        //console.log(embeddedUser);
        const users = await User.find().lean();
        console.log(JSON.stringify(users,null,2));

        //Referencing
        const userRefSchema = new mongoose.Schema({
            name:String
        });
        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"UserRef" 
            }
        });

        const UserRef = mongoose.model("UserRef",userRefSchema);
        const OrderRef = mongoose.model("OrderRef",orderRefSchema);

        const refUser = await UserRef.create({name:"Anusha"});
        await OrderRef.create([
            {product:"Mobile",price:20000,user:refUser._id},
            {product:"SmartWatch",price:10000,user:refUser._id}
        ]);

        console.log("Referenced Orders");
        console.log(await OrderRef.find().populate("user"));
    }
    catch(error){
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();