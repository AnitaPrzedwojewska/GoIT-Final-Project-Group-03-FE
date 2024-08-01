import {NavLink} from 'react-router-dom'

const FavoritePage = () => {
  return (
    <>
      <div>FavoritePage</div>
      <NavLink to='/recipe/:recipeId'>See recipe</NavLink>
    </>
  );
};

export default FavoritePage;
