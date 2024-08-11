import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const deleteMyRecipe = async (recipeId) => {
  const url = `${endpoints.MY_RECIPES_DELETE}/${recipeId}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default deleteMyRecipe;
