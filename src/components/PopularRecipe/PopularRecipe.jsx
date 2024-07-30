// import css from "./PopularRecipe.module.css";
import PropTypes from "prop-types";

const PopularRecipe = ({ children }) => {
  return (
    <>
      <div>PopularRecipe</div>
      <div>{children}</div>
    </>
  );
};

PopularRecipe.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopularRecipe;
