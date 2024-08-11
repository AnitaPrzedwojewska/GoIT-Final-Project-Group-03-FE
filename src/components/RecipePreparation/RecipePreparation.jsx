// npm packages
import { useSelector } from "react-redux";

// functions
import { getForPreparation } from '../../redux/recipes/recipes.selectors';

// styles
// import css from "./RecipePreparation.module.css";

const RecipePreparation = () => {

  const { instructions, image } = useSelector(getForPreparation);

  return (
    <>
      <div>RecipePreparation</div>
      <div>{instructions}</div>
      <img src={image} />
    </>
  );
};

export default RecipePreparation;
