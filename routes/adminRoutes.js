import express from 'express';
import jwt from 'jsonwebtoken';
import adminAuth from '../middleware/adminAuth.js';

import Vendor from '../models/Vendor.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';

const router = express.Router();

/* =========================
   ADMIN LOGIN
========================= */
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // SIMPLE ADMIN (hardcoded)
  if (email === 'admin@admin.com' && password === 'admin123') {
    const token = jwt.sign(
      { role: 'admin', email },
      process.env.JWT_SECRET || 'secret123',
      { expiresIn: '1d' }
    );

    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid admin credentials' });
});

/* =========================
   ADMIN DASHBOARD COUNTS
========================= */
router.get('/dashboard', adminAuth, async (req, res) => {
  try {
    const vendors = await Vendor.countDocuments();
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    res.json({
      vendors,
      products,
      orders
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load dashboard' });
  }
});

export default router;
