
// src/routes/userOrderRoutes.js
import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { createOrder, getUserOrders } from "../controllers/userOrderController.js";

const router = express.Router();

// Place order
router.post("/orders", userAuth, createOrder);

// Get user orders
router.get("/orders", userAuth, getUserOrders);

export default router;
