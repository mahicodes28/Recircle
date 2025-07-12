import express from 'express';
import { upload } from '../config/multer.js';
import { verifySeller } from '../middleware/authMiddleware.js';
import { addProduct , getSellerProducts  , toggleStockStatus , getProductsByCategory} from '../controllers/product.controller.js';

const router = express.Router();

router.post('/add', verifySeller, upload.array('images', 6), addProduct);
router.get('/seller/products', verifySeller, getSellerProducts);
router.patch('/toggle-stock/:id', verifySeller, toggleStockStatus);
router.get('/category/:category', getProductsByCategory)

const productRouter = router;
export default productRouter;
