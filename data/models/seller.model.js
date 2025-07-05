import mongoose from "mongoose";



const sellerSchema = new mongoose.Schema({
    name :{
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

const Seller = mongoose.model("seller", sellerSchema);
export default Seller;