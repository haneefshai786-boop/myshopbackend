// routes/productRoutes.js
import express from 'express';
import { getProductById, getAllProducts } from '../controllers/productController.js';
const router = express.Router();

// Get all products
router.get('/', getAllProducts);

// Get single product by ID
router.get('/:productId', getProductById);

export default router;
