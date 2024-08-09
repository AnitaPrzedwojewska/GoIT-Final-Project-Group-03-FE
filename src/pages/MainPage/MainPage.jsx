// components
import MainPageBg from "../../components/MainPageBg/MainPageBg";
import PreviewCategories from "../../components/PreviewCategories/PreviewCategories";
import Search from "../../components/Search/Search";
import СhooseYourBreakfast from "../../components/СhooseYourBreakfast/СhooseYourBreakfast";

// styles
import css from "./MainPage.module.css";

const MainPage = () => {

  return (
    <>
      <div className={css.mainPageContainer}>
        <MainPageBg />
        <СhooseYourBreakfast></СhooseYourBreakfast>
        <Search></Search>
      </div>
      <PreviewCategories></PreviewCategories>
    </>
  );
};

export default MainPage;
