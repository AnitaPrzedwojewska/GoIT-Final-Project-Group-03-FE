// import css from "./AuthNav.module.css";
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";

const AuthNav = ({ children }) => {
  return (
    <>
      <div>AuthNav</div>
      <div>{children}</div>
      <NavLink to='/register'>
        <button>Registration</button>
      </NavLink>
      <NavLink to='/signin'>
        <button>Sign in</button>
      </NavLink>
    </>
  );
};

AuthNav.propTypes = {
  children: PropTypes.node,
};

export default AuthNav;
