import css from "./ButonClassic.module.css";
import PropTypes from "prop-types";

const ClassicButton = ({
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

ClassicButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ClassicButton;
