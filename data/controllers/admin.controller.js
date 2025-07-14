import Banner from '../models/banner.js';
import Product from '../models/product.model.js'
import Seller from '../models/seller.model.js';



import { generateToken } from '../utils/generateToken.js';

/**
 * @desc Admin Login Controller
 * @route POST /admin/login
 * @access Public
 */
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const adminEmail ='ayushprajapat059@gmail.com';
    const hashedPassword = '1405';

    console.log(email, password);
    console.log(adminEmail, hashedPassword);

    if (email !== adminEmail) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }


    if(password !== hashedPassword){
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    // Generate JWT token
    const token = generateToken({ role: 'admin', email });

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Admin login successful',
      token,
    });

  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};





/**
 * @desc    Create a new banner
 * @route   POST /admin/banner/create
 * @access  Admin (Protected)
 */
export const createBanner = async (req, res) => {
  try {
    // Log file and body for debugging
    console.log('req.file:', req.file);
    console.log('req.body:', req.body);

    const {
      title,
      old_price,
      new_price,
      product_link = '',
      direction = 'left'
    } = req.body;

    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Image file was not uploaded. Check your form and field name.',
      });
    }

    if (!title || !old_price || !new_price) {
      return res.status(400).json({
        success: false,
        message: 'All fields including image are required',
      });
    }

    const banner = await Banner.create({
      title,
      direction,
      product_link,
      old_price: parseFloat(old_price),
      new_price: parseFloat(new_price),
      image: req.file.path, // Cloudinary-hosted image URL
    });

    console.log(banner);

    res.status(201).json({
      success: true,
      message: 'Banner added successfully',
      banner,
    });
  } catch (error) {
    console.error('Error creating banner:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

/**
 * @desc    Get all banners
 * @route   GET /admin/banner
 * @access  Admin (Protected)
 */
export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ _id: -1 });
    res.json({ success: true, banners });
  } catch (error) {
    console.error('Error fetching banners:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

/**
 * @desc    Delete a banner by ID
 * @route   DELETE /admin/banner/:id
 * @access  Admin (Protected)
 */
export const deleteBanner = async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ success: false, message: 'Banner not found' });
    }

    await banner.deleteOne();
    res.json({ success: true, message: 'Banner deleted successfully' });
  } catch (error) {
    console.error('Error deleting banner:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


export const getPendingProducts = async (req, res) => {
  try {
    const pendingProducts = await Product.find({ isApproved: 'pending' });
    res.status(200).json({ success: true, products: pendingProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching pending products' });
  }
};

export const approveProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { isApproved: 'accepted' }, { new: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    res.status(200).json({ success: true, message: 'Product approved', product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Approval failed' });
  }
};

export const rejectProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { isApproved: 'rejected' }, { new: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });

    res.status(200).json({ success: true, message: 'Product rejected', product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Rejection failed' });
  }
};

export const getAllSellers = async (req, res) => {
  try {
    const sellers = await Seller.find();
    
    const sellersWithProductCount = await Promise.all(
      sellers.map(async (seller) => {
        const productCount = await Product.countDocuments({ 'seller.id': seller._id });
        return {
          _id: seller._id,
          user: seller.name,
          email: seller.email,
          is_blocked: seller.isBlocked,
          totalproducts: productCount
        };
      })
    );

    res.status(200).json({ success: true, sellers: sellersWithProductCount });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const toggleSellerBlock = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const { is_blocked } = req.body;

    const seller = await Seller.findByIdAndUpdate(
      sellerId,
      { isBlocked: is_blocked },
      { new: true }
    );

    if (!seller) {
      return res.status(404).json({ success: false, error: 'Seller not found' });
    }

    res.status(200).json({
      success: true,
      message: `Seller has been ${is_blocked ? 'blocked' : 'unblocked'}.`,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to toggle block status' });
  }
};

export const deleteSeller = async (req, res) => {
  try {
    const { sellerId } = req.params;

    const deleted = await Seller.findByIdAndDelete(sellerId);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Seller not found' });
    }

    res.status(200).json({ success: true, message: 'Seller deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete seller' });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate('seller.id', 'name email')
      .sort({ createdAt: -1 });
    return res.status(200).json({ success: true, products });
  } catch (err) {
    console.error('Fetch all products error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
