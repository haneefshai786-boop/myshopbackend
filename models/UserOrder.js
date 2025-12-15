import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        qty: { type: Number, default: 1 }
      }
    ],
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);

export default mongoose.model("UserOrder", orderSchema);
