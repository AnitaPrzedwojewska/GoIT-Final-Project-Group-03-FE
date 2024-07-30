// import css from "./RecipesList.module.css";
import PropTypes from "prop-types";

const RecipesList = ({ children }) => {
  return (
    <>
      <div>RecipesList</div>
      <div>{children}</div>
    </>
  );
};

RecipesList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesList;
