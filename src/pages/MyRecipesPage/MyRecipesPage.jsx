import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList";
import Paginator from "../../components/Paginator/Paginator";

const MyRecipesPage = () => {
  return (
    <>
      <div>MyRecipesPage</div>
      <MainPageTitle></MainPageTitle>
      <MyRecipesList></MyRecipesList>
      <Paginator></Paginator>
    </>
  );
};

export default MyRecipesPage;