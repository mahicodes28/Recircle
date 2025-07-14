import User from '../models/clerkUser.js';

export const addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const cart = await User.addToCart(userId, productId, quantity);
    res.json({ success: true, cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;
    const cart = await User.removeFromCart(userId, productId);
    res.json({ success: true, cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId, quantity } = req.body;
    const cart = await User.updateCartItem(userId, productId, quantity);
    res.json({ success: true, cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await User.getCart(userId);
    res.json({ success: true, cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
