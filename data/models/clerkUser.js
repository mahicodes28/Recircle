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

// Add to cart
userSchema.statics.addToCart = async function(userId, productId, quantity = 1) {
  const user = await this.findById(userId);
  if (!user) throw new Error('User not found');
  const existing = user.cartItems.find(item => item.product.toString() === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    user.cartItems.push({ product: productId, quantity });
  }
  await user.save();
  return user.cartItems;
};

// Remove from cart
userSchema.statics.removeFromCart = async function(userId, productId) {
  const user = await this.findById(userId);
  if (!user) throw new Error('User not found');
  user.cartItems = user.cartItems.filter(item => item.product.toString() !== productId);
  await user.save();
  return user.cartItems;
};

// Update cart item quantity
userSchema.statics.updateCartItem = async function(userId, productId, quantity) {
  const user = await this.findById(userId);
  if (!user) throw new Error('User not found');
  const item = user.cartItems.find(item => item.product.toString() === productId);
  if (!item) throw new Error('Product not in cart');
  item.quantity = quantity;
  await user.save();
  return user.cartItems;
};

// Get cart
userSchema.statics.getCart = async function(userId) {
  const user = await this.findById(userId).populate('cartItems.product');
  if (!user) throw new Error('User not found');
  return user.cartItems;
};

const User = mongoose.model("User", userSchema);
export default User;
