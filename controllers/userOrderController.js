
// controllers/userOrderController.js
import UserOrder from "../models/UserOrder.js";
import Product from "../models/Product.js";

export const createUserOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { products } = req.body;

    if (!products || !products.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    let total = 0;
    for (const item of products) {
      const prod = await Product.findById(item.product);
      if (!prod) return res.status(404).json({ message: "Product not found" });
      total += prod.price * item.qty;
    }

    const order = await UserOrder.create({ user: userId, products, totalPrice: total });
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
