// middlewares/authSeller.js
import jwt from 'jsonwebtoken';
import Seller from '../models/seller.model.js';

export const verifySeller = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'seller') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    req.seller = decoded; // So you get req.seller.id
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Unauthorized or token expired' });
  }
};

export const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if token is present in headers
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admin access only' });
    }

    // Attach decoded data to request if needed in next middleware/controller
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
