import css from "./Buton.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick, children, classNames = "" }) => {

  return (
    <button
      className={`${css.button} ${classNames} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Button;
