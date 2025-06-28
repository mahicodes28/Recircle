const mongoose = require("mongoose");



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
       type : [],
       required : true ,
    },
    seller :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required :true ,
    },
    isApproved :{
        type : Boolean,
        default : false ,
    }
},{timestamps : true });


module.export = mongoose.model("Product", productSchema) ;
