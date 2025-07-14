import express from 'express';
import { verifyUser } from '../middleware/authMiddleware.js';
import { addToCart, removeFromCart, updateCartItem, getCart } from '../controllers/clerkUser.controller.js';
const router = express.Router();

// Cart endpoints
router.post('/cart/add', verifyUser, addToCart);
router.post('/cart/remove', verifyUser, removeFromCart);
router.post('/cart/update', verifyUser, updateCartItem);
router.get('/cart', verifyUser, getCart);

export default router;
