// import css from "./MyRecipesItem.module.css";
import PropTypes from "prop-types";

const MyRecipesItem = ({ recipe, onSeeRecipe, onRemoveRecipe }) => {
  const { _id, preview, title, description, time } = recipe;

  return (
    <>
      <div>
        <img src={preview} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Cooking time: {time}</p>
        <button onClick={() => onSeeRecipe(_id)}>See Recipe</button>
        <button onClick={() => onRemoveRecipe(_id)}>Remove Recipe</button>
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
    time: PropTypes.number.isRequired,
  }).isRequired,
  onSeeRecipe: PropTypes.func.isRequired,
  onRemoveRecipe: PropTypes.func.isRequired,
};

export default MyRecipesItem;
