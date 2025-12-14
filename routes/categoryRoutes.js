
import express from "express";
import {
  addCategory,
  getCategoriesByVendor,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/vendor/:vendorId", getCategoriesByVendor);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
