 const mongoose = require ("mongoose");

 const orderSchema = new mongoose.Schema ({ 
    userID : {
        type : mongoose.Schema.Types.ObjectId, ref : "User",
        required : true ,
    },
    items : [{
        product : {
            type : mongoose.Schema.Types.ObjectId, ref : "Product" ,
            required : true ,
        },
        quantity : {
            type : Number ,
            requried : true, 
        }
    }], 
    amount : {
        type : Number , 
        required : true,
    },
    status :{
        type : String ,
        enum : ["DELIVERED", "PENDING", "CANCELLED"],
        default : " DELIVERED",
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId , ref : " Address" ,
        required : true ,
    },
    PaymentType : {
        type : String , 
        enum : ["CASH" , "ONLINE"],
         default : "CASH",
    }, 
    PaytmentStatus : {
        type : String,
        enum : ["PAID"," ON DELIVERY"],
        default : "PAID"
    },
 },{timestamps : true }); 

module.export = mongoose.model("Order",orderSchema);