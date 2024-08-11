import axios from "axios";
import endpoints from "../../constants/apiEndpoints.js";

const addFavorite = async (recipeId) => {
  const url = `${endpoints.RECIPES_FAVORITE}`;

  try {
    const response = await axios.post(url, { recipeId });
    return response.data;
  } catch (error) {
    console.error("Error adding favorite:", error);
    return { error: error.message };
  }
};

export default addFavorite;
