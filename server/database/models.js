import { Schema, model } from "mongoose";

// schema for stock
const stockShema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

const Stock = model("Stock", stockShema);
export default Stock;
