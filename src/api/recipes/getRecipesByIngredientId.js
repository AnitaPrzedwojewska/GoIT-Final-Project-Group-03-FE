import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getRecipesByIngredientId = async (ingredientId) => {
  const url = new URL(`${apiUrl}${endpoints.RECIPE_BY_ID}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.get(url, ingredientId, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByIngredientId;
