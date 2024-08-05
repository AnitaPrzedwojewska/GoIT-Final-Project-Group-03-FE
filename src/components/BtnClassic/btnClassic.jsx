import css from "./BtnClassic.module.css";
import PropTypes from "prop-types";

const BtnClassic = ({
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
      className={`${css.classicButton} ${className} `}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

BtnClassic.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default BtnClassic;
