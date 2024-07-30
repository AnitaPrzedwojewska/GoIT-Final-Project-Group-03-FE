// import css from "./UserLogo.module.css";
import PropTypes from "prop-types";

const UserLogo = ({ children }) => {
  return (
    <>
      <div>UserLogo</div>
      <div>{children}</div>
    </>
  );
};

UserLogo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLogo;
