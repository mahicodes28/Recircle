import Seller from "../models/seller.model.js";
//import jwt from 'jsonwebtoken'
import Products from '../models/product.model.js'
//signup
export const sellerLogin = async (req,res)=>{
     const {email,password}=req.body
    try {

        const seller = await Seller.findOne({email})

        if( await bcrypt.compare(password,seller.password)){
            res.json({success:true , comapny :{
                _id : seller._id,
                name : seller.name,
                email : seller.email
        },
        token:generateToken(seller._id)
                 });
        }else{
            res.json({success:false,message:"invalid email and password"})
        }
        
    } catch (error) {
            res.json({success:false,message:error.message});

    }

}

//login
export const  sellerSignup = async (req,res)=>{
    const {name , email , password }=req.body

    if(!name || !email || !password ){
        return res.json({success:false, message:"missing details"});
    }

    try{

        const sellerExist = await Seller.findOne({email});

        if(sellerExist){
            return res.json({success:false, message:"seller already registered"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password,salt);

        const seller = await Seller.create({
            name,
            email,
            password:hashPass
        })

        res.json({success:true,
            comapny :{
                _id : seller._id,
                name : seller.name,
                email : seller.email,
        },
        token:generateToken(seller._id)
    });

    }catch(err){
        res.json({success:false , message : err.message});
    }

    
}

//get Products
export const getProducts = async (req,res)=>{

try{ 
    const sellerId = req.seller._id;
    const products = await Products.find({ seller: sellerId });
    res.json({ success: true, products });
}catch(err){
    res.json({ success: false, message: err.message });
}

}

//Add Product
export const addProduct = async (req,res)=>{

}

//getOrders
export const getOrders = async (req,res)=>{

}

//change Stock
export const toggleStock = async (req,res)=>{

}