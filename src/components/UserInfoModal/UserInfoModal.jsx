// import css from "./UserInfoModal.module.css";
import PropTypes from "prop-types";

const UserInfoModal = ({ children }) => {
  return (
    <>
      <div>LoUserInfoModalgoutBtn</div>
      <div>{children}</div>
    </>
  );
};

UserInfoModal.propTypes = {
  children: PropTypes.node,
};

export default UserInfoModal;
