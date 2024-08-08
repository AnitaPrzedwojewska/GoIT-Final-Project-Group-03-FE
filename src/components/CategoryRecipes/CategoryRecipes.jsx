import RecipesList from "../RecipesList/RecipesList";

import css from "./CategoryRecipes.module.css";

const CategoryRecipes = () => {

  return (
    <div className={css.box}>
      <RecipesList />
    </div>
  )
}

export default CategoryRecipes;