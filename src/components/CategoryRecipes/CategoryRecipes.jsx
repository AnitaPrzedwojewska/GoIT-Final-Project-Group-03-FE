import { useParams } from "react-router-dom";
import RecipesList from "../RecipesList/RecipesList";

const CategoryRecipes = () => {
  const {categoryName} = useParams()

  return (
    <>
      <p>{categoryName}</p>
      <RecipesList />
    </>
  )
}

export default CategoryRecipes;