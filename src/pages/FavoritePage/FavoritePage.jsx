import { NavLink } from "react-router-dom";

const FavoritePage = () => {
  return (
    <>
      <NavLink to='/recipe/:recipeId'>See recipe</NavLink>
    </>
  );
};

export default FavoritePage;
