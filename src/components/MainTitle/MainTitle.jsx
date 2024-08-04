// import css from "./MainTitle.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return (
    <>
      <h1>MainTitle</h1>
      <div>{children}</div>
    </>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
