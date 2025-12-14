import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import Order from '../models/Order.js';

const router = express.Router();

/* USER – place order (NO auth, as you wanted earlier) */
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Order failed' });
  }
});

/* ADMIN – get all orders */
router.get('/', adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch {
    res.status(500).json({ message: 'Failed to load orders' });
  }
});

/* ADMIN – update order status */
router.put('/:id/status', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(order);
  } catch {
    res.status(500).json({ message: 'Failed to update order' });
  }
});

export default router;
