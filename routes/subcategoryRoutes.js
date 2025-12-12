import express from 'express';
import { getSubcategoriesByCategory, createSubcategory } from '../controllers/subcategoryController.js';
const router = express.Router();
router.get('/category/:categoryId', getSubcategoriesByCategory);
router.post('/', createSubcategory);
export default router;
