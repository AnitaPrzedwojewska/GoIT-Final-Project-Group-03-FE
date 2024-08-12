import { useSelector } from "react-redux";

import {
  getName,
  getEmail,
  // getAvatar,
  // getSubscribe,
  // getFavorites,
} from "../redux/user/user.selectors.js";

const useUser = () => {
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  // const avatar = useSelector(getAvatar);
  // const subscribe = useSelector(getSubscribe);
  // const favorites = useSelector(getFavorites);

   return {
    name,
    email,
    // avatar,
    // subscribe,
    // favorites,
  };
};

export default useUser;
