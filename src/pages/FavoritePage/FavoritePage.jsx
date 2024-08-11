import css from "./FavoritePage.module.css";
import MainTitle from "../../components/MainTitle/MainTitle";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const MyFavoritesPage = () => {
  return (
    <>
      <MainTitle>Favorites</MainTitle>
      <div className={css.containerPage}>
        <FavoritesList />
      </div>
    </>
  );
};

export default MyFavoritesPage;
