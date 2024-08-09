import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const registerUser = async (userData) => {

  const url = endpoints.USER_REGISTER;

  try {
    const response = await axios.post(url, userData);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default registerUser;