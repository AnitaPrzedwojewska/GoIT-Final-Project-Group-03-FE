import axios from "axios";

const setAxiosDefault = () => {

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  axios.defaults.headers.common["Content-Type"] =
    "application/json";
}

export default setAxiosDefault;