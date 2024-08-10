import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getMyRecipes = async (page, limit) => {
  const url = `${endpoints.MY_RECIPES_GET}`;

  try {
    const response = await axios.get(url, {
      params: {
        page,
        limit,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching my recipes:", error);
    return { data: { results: [], total: 0 } };
  }
};

export default getMyRecipes;
