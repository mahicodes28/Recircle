import Seller from "../models/seller.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { generateSellerToken } from "../utils/generateToken.js";

// REGISTER SELLER
export const registerSeller = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Seller.findOne({ email });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeller = await Seller.create({
      name,
      email,
      password: hashedPassword,
    });

const token = generateSellerToken(newSeller);

    res.status(201).json({
      success: true,
      message: 'Seller registered successfully',
      seller: {
        _id: newSeller._id,
        name: newSeller.name,
        email: newSeller.email,
      },
      token,
    });

  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// LOGIN SELLER
export const loginSeller = async (req, res) => {
  try {
    const { email, password } = req.body;

    const seller = await Seller.findOne({ email });
    if (!seller) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, seller.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

const token = generateSellerToken(seller);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      seller: {
        _id: seller._id,
        name: seller.name,
        email: seller.email,
      },
      token,
    });

  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};