
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
      image: req.file?.path || "",
    });
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save product" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("vendor", "name")
      .populate("category", "name")
      .populate("subcategory", "name");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load products" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, vendor, category, subcategory } = req.body;
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        vendor,
        category,
        subcategory,
        ...(req.file && { image: req.file.path }),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete product" });
  }
};
