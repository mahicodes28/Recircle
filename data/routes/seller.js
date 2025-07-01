import express from 'express'
import { getProducts, sellerLogin, sellerSignup } from '../controllers/seller.controller.js'
import { protectSeller } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',sellerLogin);
router.post('/register',sellerSignup);
router.get('/all-products',protectSeller,getProducts);