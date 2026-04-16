//TimeStamps and advanced queries
const mongoose = require("mongoose");

async function main() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("connection connected");

        const demoSchema = new mongoose.Schema({
            name:String,
        },
        {
            timestamps:true
        }
        );
        const Model = mongoose.model("LogTime",demoSchema);
        //await Model.deleteMany();

        // await Model.create([
        //     {name:"Anush"},
        //     {name:"Pavan"},
        //     {name:"Navya"}
        // ]);

        const recent = await Model.find({
            createdAt:{
                $gte:new Date(Date.now()-90000000)
            }
        }).sort({ createdAt: -1 });
        console.log("Recent:",recent);
    }
    catch(error){
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Db disconnect");
    }
}
main();