import mongoose, { InferSchemaType } from "mongoose";

const menuItemSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    default: () => new mongoose.Types.ObjectId(),
  },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export type MenuItemType = InferSchemaType<typeof menuItemSchema>;

const restaurantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  restaurantName: { type: mongoose.Schema.Types.String, required: true },
  city: { type: mongoose.Schema.Types.String, required: true },
  country: { type: mongoose.Schema.Types.String, required: true },
  deliveryPrice: { type: mongoose.Schema.Types.Number, required: true },
  estimateDeliveryTime: { type: mongoose.Schema.Types.Number, required: true },
  cuisines: { type: mongoose.Schema.Types.String, required: true },
  menuItems: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
