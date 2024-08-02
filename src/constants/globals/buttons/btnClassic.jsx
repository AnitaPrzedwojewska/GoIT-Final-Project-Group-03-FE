import css from "./btnClassic.module.css";

export const ClassicButton = ({
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
      className={`${css.classicButton} ${className} `}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
