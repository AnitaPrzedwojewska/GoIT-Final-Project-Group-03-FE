import css from "./MyRecipesPage.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList";
import Paginator from "../../components/Paginator/Paginator";

const MyRecipesPage = () => {
  return (
    <>
      <MainTitle>My recipes</MainTitle>
      <div className={css.container}>
        <MyRecipesList />
      </div>
      <Paginator></Paginator>
    </>
  );
};

export default MyRecipesPage;
