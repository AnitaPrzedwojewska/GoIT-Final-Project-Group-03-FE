// import css from "./MainPageTitle.module.css";
import PropTypes from "prop-types";

const MainPageTitle = ({ children }) => {
  return (
    <>
      <div>MainPageTitle</div>
      <div>{children}</div>
    </>
  );
};

MainPageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainPageTitle;
