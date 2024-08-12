import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getFavoriteRecipes = async (page, limit) => {
  const url = `${endpoints.RECIPES_FAVORITE}`;

  try {
    const response = await axios.get(url, {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching my recipes:", error);
    return { data: { results: [], total: 0 } };
  }
};

export default getFavoriteRecipes;
