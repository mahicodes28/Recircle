import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : true, 
    },
    last_name : {
         type : String,
    },
    email : {
        type : mongoose.Schema.Types.ObjectId, ref :  "User" ,
    },
    street : {
        type : String,
        required : true ,
    },
    pincode: {
        type : Number,
        required : true ,
    },
    state : {
        type : String,
        required : true, 
    },
    city : {
        type : String,
        required : true ,
    },
    phone_number : {
        type : Number,
        required : [true , "The Number is Already login" ],
    },
    country : {
        type : String,
        reqiured : true ,
    }
},{timestamps : true });

module.export = mongoose.model("Address", addressSchema);