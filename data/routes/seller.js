import express from 'express'
import { getProducts, sellerLogin, sellerSignup , getOrders, toggleStock} from '../controllers/seller.controller.js'
// import { protectSeller } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',sellerLogin);
router.post('/register',sellerSignup);
router.get('/all-products',getProducts);
// router.post('/add',protectSeller,addProduct);
router.get('/getOrders', getOrders);
router.patch('/togglestock', toggleStock);

const SellerRoutes = router;
export default SellerRoutes;