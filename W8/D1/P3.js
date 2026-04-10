// Applied filters to the query using comparison operators

const mongoose = require("mongoose");

async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            catagory: String,
            status: String
        });
        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

        await Product.create([
            { name: "Laptop", price: 50000, category: "Electronics", status: "available" },
            { name: "Mobile", price: 20000, category: "Electronics", status: "available" },
            { name: "Shoes", price: 3000, category: "Fashion", status: "out of stock" },
            { name: "Watch", price: 5000, category: "Accessories", status: "available" },
            { name: "Headphones", price: 2500, category: "Electronics", status: "available" }
        ]);

        const equalQuery = await Product.find({ status: { $eq: "active" } });
        console.log("Products which are active:", equalQuery);

        const greaterQuery = await Product.find({ price: { $gt: 5000 } });
        console.log("\nProducts with price > 5000:", greaterQuery);

        const notEqualQuery = await Product.find({status: { $ne: "available" }});
        console.log("\nProducts NOT available:",notEqualQuery);

        const lesserQuery = await Product.find({price: { $lt: 5000 }});
        console.log("\nProducts with price < 5000:",lesserQuery);

        await mongoose.connection.close();
        console.log("connection closed");
    }
    catch (error) {
        console.log("Filter demo error:", error.message);
    }
}
runFilterDemo();