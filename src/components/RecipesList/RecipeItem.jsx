import css from "./RecipesList.module.css";
import PropTypes from "prop-types";

const RecipeItem = ({ title, url }) => {
  return (
    <div key={title} className={css.recipe}>
      <img className={css.photo} src={url} alt={title} />
      <div className={css.name}>{title}</div>
    </div>
  )
};

RecipeItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

export default RecipeItem;
