// npm packages
import { useSelector } from "react-redux";

// functions
import { getForPreparation } from '../../redux/recipes/recipes.selectors';

// styles
import css from "./RecipePreparation.module.css";

const RecipePreparation = () => {

  const { instructions, image } = useSelector(getForPreparation);

  return (
    <>
      <div className={css.recipeContainer}>
        <div className={css.preparationContainer}>
          <p className={css.preparationHeader}>Recipe Preparation</p>
          <div className={css.recipeStepsContainer}>
            <ol className={css.preparationList}>
                {instructions===undefined?(<div></div>):instructions.split('\r\n').map((el, index) =>
                  (<li key={index} className={css.recipeStepElement}>{el.trim()}</li>)
                )}
              </ol>
            </div>
        </div>
        <div className={css.recipeImgContainer}>
          <img src={image} className={css.recipeImg}/>
        </div>
      </div>
    </>
  );
};

export default RecipePreparation;