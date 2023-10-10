"use server";
import connectDB from "../utils/db";
import Email from "../models/emails";

connectDB();

export async function createEmail(data: any) {
  try {
    console.log(data);
    // const newEmail = await Email.create(data);
    const newEmail = await Email.create(data);
    // newEmail.save();

    // console.log(newEmail);
    console.log("sucess");
  } catch (error) {
    console.log(error);
  }
}
