// node modules
import { NavLink } from "react-router-dom";

// npm modules
import PropTypes from "prop-types";

// constants
import routes from "../../constants/routes";

// styles
import css from "./RecipeTile.module.css";

const RecipeTile = ({ id, title, preview }) => {
  return (
    <>
      <NavLink className={css.tile} to={`/${routes.RECIPES}/${id}`}>
        <img className={css.photo} src={preview} alt={title} />
        <div className={css.name}>{title}</div>
      </NavLink>
    </>
  );
};

RecipeTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string,
};

export default RecipeTile;
