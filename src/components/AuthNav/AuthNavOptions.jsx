import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

const AuthNavOptions = () => {
  return (
    <div className={css.authOptions}>
      <NavLink to='/register'>
        <button className='css.registerBtn'>Registration</button>
      </NavLink>
      <NavLink to='/signin'>
        <button className='css.loginBtn'>Sign in</button>
      </NavLink>
    </div>
  );
};

export default AuthNavOptions;
