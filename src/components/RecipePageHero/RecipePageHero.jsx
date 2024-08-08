

import PropTypes from "prop-types";

// import css from "./RecipePageHero.module.css";

const RecipePageHero = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

RecipePageHero.propTypes = {
  title: PropTypes.string,
};

export default RecipePageHero;
