
import UserOrder from "../models/UserOrder.js";

// Create a new order
export const createUserOrder = async (req, res) => {
  try {
    const { products, totalPrice, address, paymentMethod } = req.body;

    if (!products || products.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const order = await UserOrder.create({
      user: req.user._id,
      products,
      totalPrice,
      address,
      paymentMethod,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
};

// Get all orders of logged-in user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await UserOrder.find({ user: req.user._id })
      .populate("products.product", "name price");

    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load orders" });
  }
};
