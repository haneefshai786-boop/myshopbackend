import Category from '../models/Category.js';
export const getCategoriesByVendor = async (req,res) => {
  try { res.json(await Category.find({vendor:req.params.vendorId})); }
  catch(e){ res.status(500).json({error:e.message}); }
};
export const createCategory = async (req,res) => {
  try { res.json(await Category.create(req.body)); }
  catch(e){ res.status(500).json({error:e.message}); }
};
