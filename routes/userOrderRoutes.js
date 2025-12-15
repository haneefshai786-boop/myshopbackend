import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { createUserOrder, getUserOrders } from "../controllers/userOrderController.js";

const router = express.Router();

// User can create order
router.post("/", userAuth, createUserOrder);

// User can fetch all their orders
router.get("/", userAuth, getUserOrders);

export default router;
