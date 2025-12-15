// routes/userOrderRoutes.js
import express from "express";
import { createUserOrder, getUserOrders } from "../controllers/userOrderController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.post("/", userAuth, createUserOrder);
router.get("/", userAuth, getUserOrders);

export default router;
