import UserOrder from "../models/UserOrder.js";

export const createOrder = async (req, res) => {
  const { products } = req.body;
  if (!products || products.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  try {
    const order = await UserOrder.create({
      user: req.user._id, // from token middleware
      products
    });
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await UserOrder.find({ user: req.user._id })
      .populate("products.product", "name price");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};
