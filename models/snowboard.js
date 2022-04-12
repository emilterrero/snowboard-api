import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Snowboard = new Schema({
  brand: { type: String },
  model: { type: String },
  year: { type: Number },
  bestFor: { type: String },
  sizes: [{ type: Number }],
  image: { type: String },
});

export default mongoose.model("snowboards", Snowboard);