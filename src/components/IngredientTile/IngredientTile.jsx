// npm modules
import PropTypes from "prop-types";

// styles
import css from "./IngredientTile.module.css";

const IngredientTile = ({ id }) => {
  return (
    <div className={css.tile}>
      {id}
    </div>
  )
};

IngredientTile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
};

export default IngredientTile;
