const express = require('express');
const sellerdata = require('../models/user.model');
const router = express.Router();


router.get("/",async (req,res)=>{
    const seller = await sellerdata.find({});
    return res.json(seller);
});

// sign-up for seller 
router.post('/signup' , async (req,res)=>{
    try{
        const sellerbody = req.body;
        const newseller = await sellerdata.create(sellerbody);

        return res.status(201).json({message : 'seller succesfully login', data : newseller});
    }catch(err){
        console.log("error has occured");
        return res.status(500).json({message:"Something went wrong",error : err.message});
    }
});

//seller logine 
router.post('/login', async (req,res)=>{
    try{
    const {email,password}= req.body;
    const existingseller = await sellerdata.findOne({email});
    if (!existingseller){
        return res.status(404).json({message : "Seller not founded, Sign-up First"});
    }
    if (existingseller.password!==password){
        return res.status(401).json({message : "Incorrect Password !"});
    }

    res.status(200).json({message : " Seller login Successfully",
        existingseller : {
            id : existingseller._id,
            name : existingseller.user,
            password : existingseller.password   
        }
     });
    }catch(err){
    console.log("error has occured");
        return res.status(500).json({message:"Something went wrong",error : err.message});
 }
});



module.exports = router;