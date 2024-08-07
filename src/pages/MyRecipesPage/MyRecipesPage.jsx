import MainTitle from "../../components/MainTitle/MainTitle";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList";
import Paginator from "../../components/Paginator/Paginator";

const MyRecipesPage = () => {
  return (
    <>
      <MainTitle>My recipes</MainTitle>
      <MyRecipesList />
      <Paginator />
    </>
  );
};

export default MyRecipesPage;
