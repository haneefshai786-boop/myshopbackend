import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Category', categorySchema);
