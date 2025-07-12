import jwt from 'jsonwebtoken';

/**
 * @param {Object} payload - Data to embed in the token (e.g., { role: 'admin', email })
 * @returns {string} JWT token
 */
export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token valid for 1 hour
  });
};
export const generateSellerToken = (seller) => {
  return jwt.sign(
    { id: seller._id, name: seller.name, role: 'seller' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};