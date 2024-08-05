import css from "./BtnFancy.module.css";
import PropTypes from "prop-types";

const BtnFancy = ({
  width = "",
  height = "",
  fontSize = "",
  lineHeight = "",
  onClick,
  children,
  className = "",
}) => {
  const buttonStyle = {
    width,
    height,
    fontSize,
    lineHeight,
  };

  return (
    <button
      className={`${css.fancyButton} ${className} `}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

BtnFancy.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BtnFancy;
