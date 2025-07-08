import Product from '../models/product.model.js'
import { v2 as cloudinary } from 'cloudinary';

export const AddProduct = async (req, res) => {
  try {
    if (!req.body.formData) {
      return res.status(400).json({ success: false, message: "Missing formData" });
    }

    const productData = JSON.parse(req.body.formData);
    const images = req.files;

    const imageUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const sellerId = req.seller.seller_id; // 👈 from decoded JWT

    const newProduct = await Product.create({ 
      ...productData, 
      seller: sellerId,
      image: imageUrl 
    });

    return res.status(200).json({ success: true, message: "Product added", product: newProduct });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

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
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate('seller', 'user') // Only fetch the `user` field from Seller
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, products });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};


