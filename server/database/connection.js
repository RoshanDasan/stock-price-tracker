import mongoose from "mongoose";

export const connectToDb = async (URI) => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(URI, {
      dbName: "stock",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error while connecting to DB: ${error}`);
  }
};
