import { NavLink } from "react-router-dom";

import routes from "../../constants/routes";

import css from "./RecipesList.module.css";
import PropTypes from "prop-types";

const RecipeItem = ({ id, title, url }) => {
  return (
    <NavLink key={title} className={css.recipe} to={`/${routes.RECIPES}/${id}`}>
      <img className={css.photo} src={url} alt={title} />
      <div className={css.name}>{title}</div>
    </NavLink>
  )
};

RecipeItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
}

export default RecipeItem;
