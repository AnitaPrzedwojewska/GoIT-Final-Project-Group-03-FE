// import css from "./MainTitle.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return (
    <>
      <div>MainTitle</div>
      <div>{children}</div>
    </>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
