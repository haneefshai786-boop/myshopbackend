import express from 'express';
import { userAuth } from '../middleware/userAuth.js';
import { getUserOrders, createOrder } from '../controllers/userOrderController.js';

const router = express.Router();

// Get all orders of logged-in user
router.get('/', userAuth, getUserOrders);

// Place new order
router.post('/', userAuth, createOrder);

export default router;
