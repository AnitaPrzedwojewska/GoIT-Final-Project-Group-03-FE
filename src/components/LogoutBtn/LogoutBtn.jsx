// import css from "./LogoutBtn.module.css";
import PropTypes from "prop-types";

const LogoutBtn = () => {
  return (
    <button className={css.classicButton} onClick={onClick}>
      {children}
    </button>
  );
};

LogoutBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default LogoutBtn;
