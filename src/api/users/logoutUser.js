import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const logoutUser = async (userId) => {

  const url = endpoints.USER_LOGOUT;

  try {
    const response = await axios.get(url, userId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default logoutUser;