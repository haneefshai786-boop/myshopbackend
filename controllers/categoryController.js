
import Category from "../models/Category.js";

// Add category
export const addCategory = async (req, res) => {
  try {
    const { name, vendor } = req.body;
    if (!name || !vendor) return res.status(400).json({ message: "Name & vendor required" });

    const category = await Category.create({ name, vendor });
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add category" });
  }
};

// Get categories by vendor
export const getCategoriesByVendor = async (req, res) => {
  try {
    const { vendorId } = req.params;
    const categories = await Category.find({ vendor: vendorId });
    res.json(categories);
  } catch {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
    res.json(category);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};
