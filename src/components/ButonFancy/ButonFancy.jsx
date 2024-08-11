import css from './ButonFancy.module.css'
import PropTypes from "prop-types";

const FancyButton = ({
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

FancyButton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FancyButton;
