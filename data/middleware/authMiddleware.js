import jwt from 'jsonwebtoken';
import Seller from '../models/seller.model.js';


export const protectSeller = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    return res.json({ success: false, message: "Not authorized login again" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
     console.log("Decoded token =", decoded); 
    req.seller = await Seller.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;