import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    product_name :{
        type: String,
        required : true ,
    },
    description :{ 
        type : String,
        required: true ,
    },
    price :{
        type : Number,
        required : true ,
    },
    category :{
        type :String,
        required : true ,
    },
    offerPrice : {
        type : Number,
        required : true ,
    },
    instock : {
        type : Number,
        reqiured : true ,
    },
    image : {
       type : Array,
    //    required : true ,
    },
    seller :{
        // type : mongoose.Schema.Types.ObjectId,
        // ref : "seller",// same (user or seller ) ke liye user 
        // required :true ,
        type:String
    },
    mfd:{
        type:String,
    },
    exp:{
        type:String,
    },
    isApproved :{
        type : Boolean,
        default : false ,
    }
},{timestamps : true });


const Product = mongoose.model("Product", productSchema) ;
export default Product;