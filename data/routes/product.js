import express from 'express';
import {AddProduct , updateproduct} from '../controllers/product.controller.js' ;
import { protectSeller } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add',protectSeller,AddProduct)
router.patch('/approve/:id',updateproduct)

const productrouter = router;
export default productrouter;
