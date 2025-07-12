import express from 'express'
import { loginSeller , registerSeller } from '../controllers/seller.controller.js';

const router = express.Router();

router.post('/login' , loginSeller);
router.post('/register' , registerSeller);


const SellerRoutes = router;
export default SellerRoutes;