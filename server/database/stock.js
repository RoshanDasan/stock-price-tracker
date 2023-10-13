import Stock from "./models.js";

// function for updating stock and storing in database
export const updateStock = async (data) => {
  try {
    // Fetch all stocks from the database
    const stocks = await Stock.find();

    if (stocks.length === 0) {
      // If there are no stocks in the database, insert the initial data
      await Stock.insertMany(data);
    }

    // Iterate through the data and update existing stocks
    for (const element of data) {
      const updatedStock = await Stock.findOneAndUpdate(
        { name: element.name },
        { $set: { price: element.price } },
        { new: true }
      );

      if (!updatedStock) await Stock.create(element); // if the stock is not found create a new stock
    }
  } catch (error) {
    console.error("Error updating stocks:", error);
  }
};
