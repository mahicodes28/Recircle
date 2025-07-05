import Product from '../models/product.model.js'

export const AddProduct = async (req,res)=>{
    try{
        const {product_name,description, price,category,offerPrice, instock,image}= req.body;
        const seller = req.seller._id;
        const productAdd = await Product.create({
            product_name,
            description, 
            price,
            category,
            offerPrice,
            instock,
            image,
            seller,
        });

            return res.status(200).json({success : true , productAdd});
    }catch(err){
        console.log("error has occured ")
        return res.status(500).json({success : false, message: err.message});
    }
}

export const updateproduct = async (req,res)=>{
    try {
       const added = await Product.findOneAndUpdate({_id : req.params.id},{isApproved:true},{new :true});

       if (!added){
        return res.status(404).json({success : false ,message : err.message});  
         }

         return res.status(200).json({success : true , added});
    }catch(err){
        console.log("Some error occured!");
        return res.status(500).json({success : false , message : err.message });

    }
}

