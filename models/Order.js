import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: [
    {
      product: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);
