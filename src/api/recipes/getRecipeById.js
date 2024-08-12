import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getRecipeById = async (recipeId) => {
  const url = `${endpoints.RECIPE_BY_ID}/${recipeId}`;

  try {
    const response = await axios.get(url, recipeId);
    console.log('getRecipeById - response: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getRecipeById;