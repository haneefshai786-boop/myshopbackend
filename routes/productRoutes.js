import express from 'express';
import { createProduct, getProducts, getProductsByVendor } from '../controllers/productController.js';
const router = express.Router();
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/vendor/:vendorId', getProductsByVendor);
export default router;
