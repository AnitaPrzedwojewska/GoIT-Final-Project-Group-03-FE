import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList";
import Paginator from "../../components/Paginator/Paginator";

const MyRecipesPage = () => {
  return (
    <>
      <MainPageTitle />
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default MyRecipesPage;
