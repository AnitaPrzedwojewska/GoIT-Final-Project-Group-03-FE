import PropTypes from "prop-types";
import css from "./MyRecipesItem.module.css";
import ButonFancy from "../ButonFancy/ButonFancy";
import ButonClassic from "../ButonClassic/ButonClassic";

const MyRecipesItem = ({ recipe, onSeeRecipe, onRemoveRecipe }) => {
  const { _id, preview, title, description, time } = recipe;

  return (
    <>
      <div className={css.recipe}>
        <div>
          <img className={css.image} src={preview} alt={title} />
        </div>
        <div className={css.recipeContainer}>
          <div className={css.titleContainer}>
            <h2 className={css.title}>{title}</h2>
            <button
              onClick={() => onRemoveRecipe(_id)}
              className={css.removeButton}>
              {/* <BinIcon
                width={"24px"}
                height={"24px"}
                className={css.binIcon}
              /> */}
            </button>

          </div>
          <p className={css.description}>{description}</p>
          <div className={css.timeContainer}>
            <p>{time}</p>
            <ButonFancy
              height="59px"
              className={css.seeRecipeButton}
              onClick={() => onSeeRecipe(_id)}
            >
              See Recipe
            </ButonFancy>
          </div>
        </div>
      </div>
    </>
  );
};

MyRecipesItem.propTypes = {
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

export default MyRecipesItem;
