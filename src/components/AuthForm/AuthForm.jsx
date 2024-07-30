// import css from "./AuthForm.module.css";
import PropTypes from "prop-types";

const AuthForm = ({ children }) => {
  return (
    <>
      <div>AuthForm</div>
      <div>{children}</div>
    </>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthForm;
