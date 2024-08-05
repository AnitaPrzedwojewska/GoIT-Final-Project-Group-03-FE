import { NavLink } from "react-router-dom";

import FancyButton from "../BtnFancy/BtnFancy";

import css from "./AuthNav.module.css";

const AuthNavOptions = () => {
  return (
    <div className={css.authOptions}>
      <NavLink to="/register">
        <FancyButton className={css.greenButton}>Registration</FancyButton>
      </NavLink>
      <NavLink to="/signin">
        <FancyButton className={css.singinButton}>Sing In</FancyButton>
      </NavLink>
    </div>
  );
};

export default AuthNavOptions;
