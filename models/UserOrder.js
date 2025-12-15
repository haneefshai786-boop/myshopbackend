import mongoose from 'mongoose';

const userOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      qty: { type: Number, required: true },
    }
  ],
  total: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('UserOrder', userOrderSchema);
