import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const getRecipesBySearchTerm = async (searchTerm) => {
  const url = `${endpoints.OTHER_SEARCH}?keyword=${searchTerm}`;
  console.log(url);
  try {
    const response = await axios.get(url); // Corrected this line
    console.log("API response:", response);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

export default getRecipesBySearchTerm;
