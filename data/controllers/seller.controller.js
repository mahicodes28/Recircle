import Seller from "../models/seller.model.js";
//import jwt from 'jsonwebtoken'
import Product from '../models/product.model.js'
//signup
import Order from '../models/order.model.js'
//for details 
import bcrypt from 'bcrypt';

//import generateToken from '../middleware/authMiddleware.js'

export const sellerLogin = async (req,res)=>{
    //  const {email,password}=req.body
    // try {
    //     const seller = await Seller.findOne({email})

    //     if( await bcrypt.compare(password,seller.password)){
    //         res.json({success:true , comapny :{
    //             _id : seller._id,
    //             name : seller.name,
    //             email : seller.email
    //     },
    //     token:generateToken(seller._id)
    //              });
    //     }else{
    //         res.json({success:false,message:"invalid email and password"})
    //     }
    // } catch (error) {
    //         res.json({success:false,message:error.message});

    // }
}

//login
export const  sellerSignup = async (req,res)=>{
    // const {name , email , password }=req.body

    // if(!name || !email || !password ){
    //     return res.json({success:false, message:"missing details"});
    // }

    // try{

    //     const sellerExist = await Seller.findOne({email});

    //     if(sellerExist){
    //         return res.json({success:false, message:"seller already registered"});
    //     }

    //     const salt = await bcrypt.genSalt(10);
    //     const hashPass = await bcrypt.hash(password,salt);

    //     const seller = await Seller.create({
    //         name,
    //         email,
    //         password:hashPass
    //     })

    //     res.json({success:true,
    //         comapny :{
    //             _id : seller._id,
    //             name : seller.name,
    //             email : seller.email,
    //     },
    //     token:generateToken(seller._id)
    // });

    // }catch(err){
    //     res.json({success:false , message : err.message});
    // }

    
}

//get Products
export const getProducts = async (req,res)=>{

// try{ 
//     const sellerId = req.seller._id;
//     const products = await Product.find({ seller: sellerId });
//     res.json({ success: true, products });
// }catch(err){
//     res.json({ success: false, message: err.message });
// }

}

//Add Product
// export const addProduct = async (req,res)=>{
// try{
//     const {product_name,description,price,category,offerPrice, instock,image}=req.body;
//     const seller = req.seller._id.toString();
//     const product = new Product({
//         product_name,
//         description,
//         price,
//         category,
//         offerPrice,
//         instock,
//         image,
//         seller //seller id check hogi kya ?
//     });

//     await product.save();
//     return res.status(201).json({success :true , product });
// }catch(err){
//     return res.status(404).json({success :false  , message : err.message});
// }
// }

//getOrders
export const getOrders = async (req,res)=>{
    try {
        const orderdetail = await Order.find()
        .populate("userID","name email")
        .populate("items.product")
        .populate("amount")
        .populate("customer")

       return res.status(200).json({succes : true , orderdetail});

    }catch(err){
        return res.status(400).json({success : false , message : err.message} )
    }
}

//change Stock
export const toggleStock = async (req,res)=>{
    const {product_name} = req.body;
    if(!product_name){
        return res.status(404).json({success:false , message : err.message });
    }

try{
    const product = await Product.findOneAndUpdate(
        {product_name},
        {instock : !Product.instock},
        {new : true});

     return res.status(201).json({success : true , product})
}catch(err){
    return res.status(500).json({success: false , message : err.message});
}
}