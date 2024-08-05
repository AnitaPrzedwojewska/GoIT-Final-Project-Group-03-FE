import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getRecipeCategories = async () => {
  const url = new URL(`${apiUrl}${endpoints.RECIPE_CATEGORIES}`);

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipeCategories;