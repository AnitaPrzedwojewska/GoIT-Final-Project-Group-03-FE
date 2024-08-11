import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getFavorites = async (userId) => {
  const url = endpoints.OTHER_FAVORITE;

  try {
    const response = await axios.post(url, userId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getFavorites;
