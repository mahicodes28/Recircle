import express from 'express';
import {AddProduct , getAllProducts, updateproduct} from '../controllers/product.controller.js' ;
import { verifySellerToken } from '../middleware/authMiddleware.js';
import { upload } from '../config/multer.js'

const router = express.Router();

//router.post('/add',verifySellerToken, upload.array("images"), AddProduct);
router.post('/add', (req, res, next) => {
  console.log("✅ /product/add route hit");
  next();
}, verifySellerToken, upload.array('images'), AddProduct);
router.get('/',getAllProducts);
router.patch('/approve/:id',updateproduct)

const productrouter = router;
export default productrouter;
