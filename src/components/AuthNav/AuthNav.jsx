// import css from "./AuthNav.module.css";
import PropTypes from "prop-types";

const AuthNav = ({ children }) => {
  return (
    <>
      <div>AuthNav</div>
      <div>{children}</div>
    </>
  );
};

AuthNav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthNav;
