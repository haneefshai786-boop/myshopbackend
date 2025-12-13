import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,

  // 🔥 ADD THIS
  type: {
    type: String,
    enum: ['restaurant', 'grocery'],
    required: true
  },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Vendor', vendorSchema);
