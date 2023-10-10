"use server";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected!");
      return;
    }
    // console.log(mongoose.connections);
    await mongoose.connect("mongodb://192.168.1.12:27017/MyTestDB");
    console.log("Connected to MongoDB");
    return { success: true };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return { success: false };
  }
};

export default connectDB;
