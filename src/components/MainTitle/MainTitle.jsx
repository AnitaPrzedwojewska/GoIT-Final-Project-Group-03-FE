// import css from "./MainTitle.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainTitle;
