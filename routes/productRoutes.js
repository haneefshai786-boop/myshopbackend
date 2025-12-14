
import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

// Admin routes
router.post("/", adminAuth, upload.single("image"), createProduct);
router.get("/", adminAuth, getProducts);
router.put("/:id", adminAuth, upload.single("image"), updateProduct);
router.delete("/:id", adminAuth, deleteProduct);

export default router;
