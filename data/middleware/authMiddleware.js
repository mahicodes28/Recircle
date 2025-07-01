import jwt from 'jsonwebtoken';
import Seller from '../models/user.model.js'


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
    req.seller = await Seller.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};