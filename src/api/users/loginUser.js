import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";


const loginUser = async (userData) => {

  const url = endpoints.USER_LOGIN;

  try {
    let response = await axios.post(url, userData);
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export default loginUser;