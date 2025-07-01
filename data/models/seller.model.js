import mongoose from "mongoose";



const sellerSchema = new mongoose.Schema({
    user :{
        type : String,
        required : true ,
    },
    email : {
        type : String,
        required : true,
        unique : true ,
        lowercase : true ,
    },
    password :{
        type : String,
        required : true ,
    },
    cartItems: {
        type : mongoose.Schema.Types.ObjectId , ref : "Order", 
    },
},{timestamps : true});

module.exports = mongoose.model("User", sellerSchema);