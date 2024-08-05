import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const deleteMyRecipe = async (recipeId) => {
  const url = new URL(`${apiUrl}${endpoints.MY_RECIPES_DELETE}/${recipeId}`);

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default deleteMyRecipe;
