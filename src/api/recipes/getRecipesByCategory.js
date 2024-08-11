// npm packages
import axios from "axios";

// constants
import endpoints from "../../constants/apiEndpoints.js";

const getRecipesByCategory = async (category, page = 1, limit = 4) => {
  const url = `${endpoints.RECIPES_BY_CATEGORY}/${category}?page=${page}&limit=${limit}`;
  try {
    const response = await axios.get(url, category);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByCategory;