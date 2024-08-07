import { NavLink } from "react-router-dom";

import ButonFancy from "../ButonFancy/ButonFancy";

import css from "./AuthNav.module.css";

const AuthNavOptions = () => {
  return (
    <div className={css.authOptions}>
      <NavLink to='/register'>
        <ButonFancy className={css.greenButton}>Registration</ButonFancy>
      </NavLink>
      <NavLink to='/signin'>
        <ButonFancy className={css.singinButton}>Sign In</ButonFancy>
      </NavLink>
    </div>
  );
};

export default AuthNavOptions;
