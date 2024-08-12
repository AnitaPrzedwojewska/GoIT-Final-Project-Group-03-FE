import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const removeFavorite = async (recipeId) => {
  const url = `${endpoints.RECIPES_FAVORITE}`;

  try {
    const response = await axios.delete(url, {
      data: { recipeId },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default removeFavorite;
