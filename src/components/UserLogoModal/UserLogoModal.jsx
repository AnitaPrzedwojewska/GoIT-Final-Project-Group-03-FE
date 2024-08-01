// import css from "./UserLogoModal.module.css";
import PropTypes from "prop-types";

const UserLogoModal = ({ children }) => {
  return (
    <>
      <div>UserLogoModal</div>
      <div>{children}</div>
    </>
  );
};

UserLogoModal.propTypes = {
  children: PropTypes.node,
};

export default UserLogoModal;
