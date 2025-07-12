import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
    },
    product_link: {
      type: String, // URL, validated manually or via regex
    },
    old_price: {
      type: Number,
      required: true,
    },
    new_price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // URL, required
      required: true,
    },
  },
  {
    collection: 'banners',       
    timestamps: true,              
  }
);

const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;
