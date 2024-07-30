// import css from "./PreviewCategories.module.css";
import PropTypes from "prop-types";

const PreviewCategories = ({ children }) => {
  return (
    <>
      <div>PreviewCategories</div>
      <div>{children}</div>
    </>
  );
};

PreviewCategories.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreviewCategories;
