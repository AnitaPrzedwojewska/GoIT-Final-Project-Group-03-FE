import axios from "axios";

const setAxiosDefault = () => {

  axios.defaults.baseURL =
      "https://goit-final-project-group-03-0d739c75b790.herokuapp.com";
  // console.log(`Set base url to: ${import.meta.env.VITE_API_URL}`);
  // axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  axios.defaults.headers.common["Content-Type"] =
    "application/json";
}

export default setAxiosDefault;