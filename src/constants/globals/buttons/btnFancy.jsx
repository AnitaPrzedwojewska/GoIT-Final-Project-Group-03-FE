import css from "./btnFancy.module.css";

export const FancyButton = ({
  width = "",
  height = "",
  fontSize = "",
  lineHight = "",
  onClick,
  children,
  className = "",
}) => {
  const buttonStyle = {
    width,
    height,
    fontSize,
    lineHight,
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
