import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import Order from "../models/Order.js";

const router = express.Router();

// Place an order
router.post("/", userAuth, async (req, res) => {
  try {
    const { products } = req.body;
    if (!products || products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      user: req.user._id,
      products,
      status: "Pending",
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
});

// Get user orders
router.get("/", userAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "products.product"
    );
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load orders" });
  }
});

export default router;
