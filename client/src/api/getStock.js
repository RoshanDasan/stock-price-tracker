import axios from "axios";

// api request for fetching data from server
export const getStock = async () => {
  try {
    const response = await axios.get("https://stock-price-tracker-server.vercel.app/api/stocks");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(`Error while fetching stock: ${error.message}`);
  }
};
