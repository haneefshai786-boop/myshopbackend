
import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, vendor, category, subcategory } = req.body;

    const product = await Product.create({
      name,
      price,
      vendor,
      category,
      subcategory,
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save product" });
  }
};

export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find()
      .populate("vendor", "name")
      .populate("category", "name")
      .populate("subcategory", "name");

    res.json(products);
  } catch {
    res.status(500).json({ message: "Failed to load products" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && { image: `/uploads/${req.file.filename}` })
      },
      { new: true }
    );

    res.json(updated);
  } catch {
    res.status(500).json({ message: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch {
    res.status(500).json({ message: "Failed to delete product" });
  }
};
