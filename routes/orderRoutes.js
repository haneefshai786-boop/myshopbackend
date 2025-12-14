// backend/routes/orders.js (example)
import express from 'express';
import Order from '../models/Order.js';
import { adminAuth } from '../middleware/auth.js';

const router = express.Router();

// GET /api/orders - fetch all orders (admin)
router.get('/', adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
