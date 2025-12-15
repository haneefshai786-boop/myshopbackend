// src/routes/userOrderRoutes.js
import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import Order from "../models/Order.js";

const router = express.Router();

// Place Order
router.post("/", userAuth, async (req, res) => {
  try {
    const { cart, total } = req.body;

    const order = await Order.create({
      user: req.user._id,   // <- Make sure this is set
      items: cart,
      total,
    });

    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// Get My Orders
router.get("/", userAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items.product", "name price");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;
