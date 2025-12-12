import Vendor from '../models/Vendor.js';
export const getVendors = async (req,res) => {
  try { res.json(await Vendor.find()); }
  catch(e){ res.status(500).json({error:e.message}); }
};
export const createVendor = async (req,res) => {
  try { res.json(await Vendor.create(req.body)); }
  catch(e){ res.status(500).json({error:e.message}); }
};
