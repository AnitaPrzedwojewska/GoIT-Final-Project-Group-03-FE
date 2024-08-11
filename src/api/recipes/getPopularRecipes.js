// npm packages
import axios from "axios";

// constants
import endpoints from "../../constants/apiEndpoints.js";

const getPopularRecipes = async () => {
  const url = `${endpoints.RECIPES_POPULAR}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    console.error("Error fetching popular recipes:", error);
    return [];
  }
};

export default getPopularRecipes;
