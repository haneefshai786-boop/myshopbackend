import Vendor from '../models/Vendor.js';

export const getVendors = async (req, res) => {
  try {
    const { type } = req.query; // restaurant / grocery

    const filter = type ? { type } : {};
    const vendors = await Vendor.find(filter);

    res.json(vendors);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createVendor = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
