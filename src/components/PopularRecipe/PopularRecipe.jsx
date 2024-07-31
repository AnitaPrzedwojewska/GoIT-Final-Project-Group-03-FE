import {NavLink} from 'react-router-dom'

// import css from "./PopularRecipe.module.css";
import PropTypes from "prop-types";

const PopularRecipe = ({ children }) => {
  return (
    <>
      <div>PopularRecipe</div>
      <div>{children}</div>
      <NavLink to='/recipe/:recipeId'>See recipe</NavLink>
    </>
  );
};

PopularRecipe.propTypes = {
  children: PropTypes.node,
};

export default PopularRecipe;
