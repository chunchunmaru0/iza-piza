import mongoose from "mongoose";

const emailModel = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Email = mongoose.models.Email || mongoose.model("Email", emailModel);

export default Email;
