import { NavLink } from "react-router-dom";

import BtnFancy from "../BtnFancy/BtnFancy";

import css from "./AuthNav.module.css";

const AuthNavOptions = () => {
  return (
    <div className={css.authOptions}>
      <NavLink to="/register">
        <BtnFancy className={css.greenButton}>Registration</BtnFancy>
      </NavLink>
      <NavLink to="/signin">
        <BtnFancy className={css.singinButton}>Sing In</BtnFancy>
      </NavLink>
    </div>
  );
};

export default AuthNavOptions;
