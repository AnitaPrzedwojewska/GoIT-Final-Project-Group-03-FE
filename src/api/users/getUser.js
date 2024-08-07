import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";

const getUser = async (userId) => {

  const url = endpoints.USER_CURRENT;

  try {
    const response = await axios.post(url, userId);
    console.log('getUser - response.data: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default getUser;