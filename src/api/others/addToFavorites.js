import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const addToFavorites = async (userId, recipeId) => {
  const url = endpoints.OTHER_FAVORITE;

  try {
    const response = await axios.post(url, userId, recipeId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default addToFavorites;
