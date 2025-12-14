
import Subcategory from "../models/Subcategory.js";

// Add subcategory
export const addSubcategory = async (req, res) => {
  try {
    const { name, category } = req.body;
    if (!name || !category) return res.status(400).json({ message: "Name & category required" });

    const subcategory = await Subcategory.create({ name, category });
    res.json(subcategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add subcategory" });
  }
};

// Get subcategories by category
export const getSubcategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await Subcategory.find({ category: categoryId });
    res.json(subcategories);
  } catch {
    res.status(500).json({ message: "Failed to fetch subcategories" });
  }
};

// Update subcategory
export const updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const subcategory = await Subcategory.findByIdAndUpdate(id, { name }, { new: true });
    res.json(subcategory);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete subcategory
export const deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Subcategory.findByIdAndDelete(id);
    res.json({ message: "Subcategory deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};
