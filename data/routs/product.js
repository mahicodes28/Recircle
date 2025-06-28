const express = require('express');
const productdata = require('../models/product.model');
const router = express.Router();

//product - added by seller 
router.post('/add',async (req,res)=>{
    try{
        const {product_name,description, price,category,offerPrice, instock,image,seller,isApproved}= req.body;

        const productAdd = await productdata.create({
            product_name,
            description, 
            price,
            category,
            offerPrice,
            instock,
            image,
            seller:seller,
            isApproved : false });

            return res.status(200).json({message : "the item is successfully added ", data : productAdd});
    }catch(err){
        console.log("error has occured ")
        return res.status(500).json({message : " error ", error : err.message});
    }
});

router.patch('/approve/:id',async (req,res)=>{
    try {
       
       const added = await productdata.findOneAndUpdate({_id : req.params.id},{isApproved:true},{new :true});

       if (!added){
        return res.status(404).json({message : "faild to add Product"});  
         }

         return res.status(200).json({message : "Product added successfully " , 
            data : added 
         });
    }catch(err){
        console.log("Some error occured!");
        return res.status(500).json({message : "error ahs been founded ", error : err.message});

    }
});

module.exports = router;