import mongoose from "mongoose";

const DbConnect = async () => {
  mongoose.connect("mongodb://localhost:27017/youtube");
  console.log("DataBase Connected SuccesFully✅");
};
DbConnect();

