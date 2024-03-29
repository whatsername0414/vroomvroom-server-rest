import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  push_token: String,
  phone: {
    number: String,
    verified: {
      type: Boolean,
      default: false,
    },
  },
  location: {
    address: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    additional_information: {
      type: String,
      default: null,
    },
    coordinates: [Number],
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.model("User", UserSchema);
