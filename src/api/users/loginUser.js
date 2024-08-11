import axios from "axios";

import endpoints from "../../constants/apiEndpoints.js";


const loginUser = async (userData) => {

  const url = endpoints.USER_LOGIN;

  try {
    let response = await axios.post(url, userData);
    console.log('response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error login', error.message);
    // console.log(error);
    // return error.message;

    if (error.response && error.response.status === 401) {
      alert('Wrong login or password');
    } else {
      alert('Other error occured. Try again later');
    }
  }
};

export default loginUser;