import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getMainPageRecipes = async (page = 1, limit = 4) => {
  const url = new URL(
    `${apiUrl}${endpoints.RECIPES_MAIN_PAGE}?page=${page}&limit=${limit}`
  );
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getMainPageRecipes;
