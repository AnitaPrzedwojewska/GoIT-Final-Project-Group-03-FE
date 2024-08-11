import PropTypes from "prop-types";
import css from "./FavoriteItem.module.css";
import DeleteIcon from "../IconsSVG/DeleteIcon";

const DEFAULT_IMAGE_URL = "/images/no-image.png";

const FavoriteItem = ({ recipe, onSeeRecipe, onRemoveRecipe }) => {
  const { _id, preview, title, description, time } = recipe;

  const imageSrc = preview || DEFAULT_IMAGE_URL;

  return (
    <>
      <div className={css.containerItem}>
        <img className={css.image} src={imageSrc} alt={title} />
        <div className={css.descContainer}>
          <div className={css.title}>
            <h3>{title}</h3>
            <button
              className={css.removeButton}
              onClick={() => onRemoveRecipe(_id)}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
          <p className={css.description}>{description}</p>
          <div className={css.buttonBox}>
            <p>{time} min</p>
            <button className={css.seeButton} onClick={() => onSeeRecipe(_id)}>
              See Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

FavoriteItem.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    preview: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  onSeeRecipe: PropTypes.func.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
};

export default FavoriteItem;
