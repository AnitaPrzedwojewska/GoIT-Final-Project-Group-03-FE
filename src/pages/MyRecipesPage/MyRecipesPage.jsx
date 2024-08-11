import css from "./MyRecipesPage.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";
import MyRecipesList from "../../components/MyRecipesList/MyRecipesList";

const MyRecipesPage = () => {
  return (
    <>
      <MainTitle>My recipes</MainTitle>
      <div className={css.container}>
        <MyRecipesList />
      </div>
    </>
  );
};

export default MyRecipesPage;
