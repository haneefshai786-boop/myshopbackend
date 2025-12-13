import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
