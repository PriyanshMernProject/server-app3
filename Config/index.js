import mongoose from "mongoose";

/* Mongoose settings */
export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected to MongoDB");
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
