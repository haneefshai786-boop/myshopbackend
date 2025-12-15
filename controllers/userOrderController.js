// src/controllers/userOrderController.js
import Order from "../models/UserOrder.js"; // separate order schema for users

export const createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = await Order.create({
      user: req.user._id,
      items,
      total,
    });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("items.product");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
