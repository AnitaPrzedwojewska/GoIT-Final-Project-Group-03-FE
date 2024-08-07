import css from "./RecipesList.module.css";
import PropTypes from "prop-types";

const RecipeItem = ({ title, url }) => {
  return (
    <div key={title} className={css.recipeItem}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
};

RecipeItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

export default RecipeItem;
