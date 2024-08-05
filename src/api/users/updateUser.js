import axios from "axios";

// import apiUrl from "../../services/api.js";
import { apiUrl } from "../../constants/apiUrl.js";
import { endpoints } from "../../constants/apiEndpoints.js";

const updateUser = async (userData) => {

  const url = new URL(`${apiUrl}${endpoints.USER_UPDATE}`);
  const options = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.patch(url, userData, options);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default updateUser;