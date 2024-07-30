// import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";

const MyRecipesList = ({ children }) => {
  return (
    <>
      <div>MyRecipesList</div>
      <div>{children}</div>
    </>
  );
};

MyRecipesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyRecipesList;
