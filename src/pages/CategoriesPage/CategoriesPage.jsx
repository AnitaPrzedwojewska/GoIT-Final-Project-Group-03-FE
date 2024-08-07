import MainTitle from '../../components/MainTitle/MainTitle.jsx';
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav.jsx';
import RecipesList from '../../components/RecipesList/RecipesList.jsx';

const CategoriesPage = () => {
  return (
    <>
      <MainTitle>Categories</MainTitle>
      <CategoriesNav />
      <RecipesList />
    </>
  );
};

export default CategoriesPage;
