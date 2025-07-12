import express from 'express';
import { upload } from '../config/multer.js';
import { adminLogin , getAllBanners , createBanner , deleteBanner ,getPendingProducts , approveProduct , rejectProduct , getAllSellers , toggleSellerBlock , deleteSeller , getAllProducts} from '../controllers/admin.controller.js';
import { verifyAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login',adminLogin);
router.post('/banner/create', verifyAdmin, upload.single('image'), createBanner);
router.get('/banner', verifyAdmin, getAllBanners);
router.delete('/banner/:id', verifyAdmin, deleteBanner);
router.get('/products/pending', verifyAdmin, getPendingProducts);
router.patch('/product/:id/approve', verifyAdmin, approveProduct);
router.patch('/product/:id/reject', verifyAdmin, rejectProduct);
router.get('/seller', verifyAdmin, getAllSellers);
router.patch('/seller/toggle/:sellerId', verifyAdmin, toggleSellerBlock);
router.delete('/seller/delete/:sellerId', verifyAdmin, deleteSeller);
router.get('/allproducts', verifyAdmin, getAllProducts);

export default router;