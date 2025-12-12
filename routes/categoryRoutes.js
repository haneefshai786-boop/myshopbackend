import express from 'express';
import { getCategoriesByVendor, createCategory } from '../controllers/categoryController.js';
const router = express.Router();
router.get('/vendor/:vendorId', getCategoriesByVendor);
router.post('/', createCategory);
export default router;
