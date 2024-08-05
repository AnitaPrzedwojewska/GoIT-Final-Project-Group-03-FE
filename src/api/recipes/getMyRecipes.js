import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getMyRecipes = async (page = 1, limit = 4) => {
  const url = new URL(
    `${apiUrl}${endpoints.MY_RECIPES_GET}?page=${page}&limit=${limit}`
  );
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getMyRecipes;
