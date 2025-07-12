import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instock: {
    type: Boolean,
    default: true,         // true = in stock, false = out of stock
  },
  image: {
    type: [String],        // Array of image URLs
  },
  seller: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "seller", required: true },
    name: { type: String, required: true },
  },
  mfd: {
    type: String,
  },
  exp: {
    type: String,
  },
  isApproved: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
