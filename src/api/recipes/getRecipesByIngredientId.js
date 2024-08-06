import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getRecipesByIngredientId = async (ingredientId) => {
  const url = endpoints.RECIPES_BY_INGREDIENTS_ID;

  try {
    const response = await axios.get(url, ingredientId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipesByIngredientId;
