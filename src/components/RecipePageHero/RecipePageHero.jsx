// npm packages
import { useSelector } from "react-redux";

// functions
import { getForRecipePageHero } from "../../redux/recipes/recipes.selectors";

// styles
// import css from "./RecipePageHero.module.css";

const RecipePageHero = () => {

  const { _id, title, description, time } = useSelector(getForRecipePageHero);
  console.log("PageHero - data:");
  console.log(`${_id}: ${title} - ${time}`);
  console.log(description);

  return (
    <>
      <h1>{title}</h1>
      <h6>Id: {_id}</h6>
      <p>{description}</p>
      <p>{time}</p>
    </>
  );
};

export default RecipePageHero;
