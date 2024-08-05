import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const getUser = async (userId) => {

  const url = new URL(`${apiUrl}${endpoints.USER_CURRENT}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.post(url, userId, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getUser;