import Subcategory from '../models/Subcategory.js';
export const getSubcategoriesByCategory = async (req,res) => {
  try { res.json(await Subcategory.find({category:req.params.categoryId})); }
  catch(e){ res.status(500).json({error:e.message}); }
};
export const createSubcategory = async (req,res) => {
  try { res.json(await Subcategory.create(req.body)); }
  catch(e){ res.status(500).json({error:e.message}); }
};
