import { useSelector } from "react-redux";
import {
  getUser
} from "../redux/user/user.selectors.js";

const useUser = () => {
  const user = useSelector(getUser);

  return {

    user,
  };
};

export default useUser;
