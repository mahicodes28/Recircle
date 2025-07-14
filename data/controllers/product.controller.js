import Product from '../models/product.model.js';
import cloudinary from 'cloudinary';
import { v4 as uuidv4 } from 'uuid';

export const addProduct = async (req, res) => {
  try {
    const seller = req.seller; 
   
  if (!seller || !seller.id) {
  return res.status(401).json({ success: false, message: "Unauthorized: Seller info missing" });
  }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "At least one image is required." });
    }

    const { formData } = req.body;
    const parsedData = JSON.parse(formData);

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      req.files.map(async (file) => {
        const result = await cloudinary.v2.uploader.upload(file.path, {
          folder: 'products',
          public_id: uuidv4(),
        });
        return result.secure_url;
      })
    );

    const newProduct = new Product({
      ...parsedData,
      instock: true,
      isApproved: 'pending',
      image: imageUrls,
      seller: {
        id: seller.id,
        name: seller.name,
      },
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product added successfully and is pending approval.",
      product: newProduct,
    });

  } catch (err) {
    console.error("Product Add Error:", err);
    return res.status(500).json({ success: false, message: "Server error while adding product." });
  }
};


export const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.seller.id; // extracted from JWT

    const products = await Product.find({ 'seller.id': sellerId });

    console.log(products);

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.error("Get seller products error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching seller's products",
    });
  }
};
export const toggleStockStatus = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Toggle instock value
    product.instock = !product.instock;

    await product.save();

    res.status(200).json({
      success: true,
      message: `Product marked as ${product.instock ? "In Stock" : "Out of Stock"}`,
    });
  } catch (err) {
    console.error("Toggle stock error:", err);
    res.status(500).json({ success: false, message: "Server error while toggling stock" });
  }
};
export const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (!category) {
      return res.status(400).json({ success: false, message: "Category is required." });
    }

    const products = await Product.find({
      category: category,
      isApproved: "accepted",
      instock: true, // fixed field name
    }).populate('seller', 'name');

    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.error("Error in getProductsByCategory:", err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllProducts = async (req,res)=>{
  try{
    const products = await Product.find({isApproved:'accepted' , instock:true}).populate('seller', 'name');
    if(!products || products.length === 0){
      return res.status(404).json({success:false, message:"No products found"});
    }
    return res.status(200).json({success:true, products});
  }catch(err){
    console.error("Error in getAllProducts:", err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getProductById = async (req,res)=>{
  try {
    
    const prodId = req.params.id;
    if(!prodId){
      return res.status(400).json({success:false, message:"Product ID is required"});
    }

    const product = await Product.findById(prodId);
   // console.log(product , prodId);
    if(!product){
      return res.status(404).json({success:false, message:"Product not found"});
    }

    return res.status(200).json({success:true, product:product});
  } catch (error) {
    console.error("Error in getProductById:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
}