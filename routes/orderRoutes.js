import express from 'express';
import { adminAuth } from '../middleware/adminAuth.js';
import Order from '../models/Order.js';

const router = express.Router();

// Admin fetch all orders
router.get('/', adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().populate('items.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

// User place order
router.post('/', async (req, res) => {
  const { items, total } = req.body;
  if (!items || !items.length) return res.status(400).json({ message: 'Cart empty' });

  try {
    const newOrder = await Order.create({ items, total, createdAt: new Date() });
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Order failed' });
  }
});

export default router;
