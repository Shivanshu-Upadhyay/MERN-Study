import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  userId: String,
  compnay: String,
});

const products = mongoose.model("products", productSchema);

export default products;
