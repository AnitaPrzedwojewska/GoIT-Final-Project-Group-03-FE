import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const updateUser = async (userData) => {

  const url = endpoints.USER_UPDATE;

  try {
    const response = await axios.patch(url, userData);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default updateUser;