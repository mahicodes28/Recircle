import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // Clerk ID or custom UID
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },

  cartItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
