import UserOrder from '../models/UserOrder.js';

export const getUserOrders = async (req, res) => {
  try {
    const orders = await UserOrder.find({ user: req.user._id })
      .populate('products.product', 'name price')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to load orders' });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { products, total } = req.body;
    const order = await UserOrder.create({
      user: req.user._id,
      products,
      total,
    });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to place order' });
  }
};
