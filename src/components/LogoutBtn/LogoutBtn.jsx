// import css from "./LogoutBtn.module.css";
import PropTypes from "prop-types";

const LogoutBtn = ({ children }) => {
  return (
    <>
      <div>LogoutBtn</div>
      <div>{children}</div>
    </>
  );
};

LogoutBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LogoutBtn;
