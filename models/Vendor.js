import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true }, // NEW: e.g., "Restaurant" or "Grocery"
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Vendor', vendorSchema);
