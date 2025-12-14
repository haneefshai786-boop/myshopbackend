
import express from "express";
import {
  addSubcategory,
  getSubcategoriesByCategory,
  updateSubcategory,
  deleteSubcategory
} from "../controllers/subcategoryController.js";

const router = express.Router();

router.get("/category/:categoryId", getSubcategoriesByCategory);
router.post("/", addSubcategory);
router.put("/:id", updateSubcategory);
router.delete("/:id", deleteSubcategory);

export default router;
