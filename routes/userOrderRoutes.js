import express from "express";
import { userAuth } from "../middleware/userAuth.js";
import { createUserOrder, getUserOrders } from "../controllers/userOrderController.js";

const router = express.Router();

// Only authenticated users can access
router.post("/", userAuth, createUserOrder);
router.get("/", userAuth, getUserOrders);

export default router;
