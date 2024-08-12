import css from "./FavoritesList.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import removeFavorite from "../../api/recipes/removeFavourite";
import getFavoriteRecipes from "../../api/recipes/getFavoriteRecipes";
import Notiflix from "notiflix";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import Paginator from "../Paginator/Paginator";

const FavoritesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recipesPerPage = 4;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getFavoriteRecipes(currentPage, recipesPerPage);

        setRecipes(response.favorites);
        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
        setTotalPages(1);
      }
    };
    fetchRecipes();
  }, [currentPage, totalPages]);

  const handleSeeRecipe = (id) => {
    navigate(`/recipes/${id}`);
  };

  const handleRemoveRecipe = async (id) => {
    const response = await removeFavorite(id);
    if (!response.error) {
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => recipe._id !== id)
      );
      Notiflix.Notify.success("Recipe removed from favorites!");
    } else {
      Notiflix.Notify.failure(
        "Error remmoving recipe from favorites. Try again!"
      );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={css.containerList}>
        {recipes === undefined ? (<div></div>) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <FavoriteItem
              key={recipe._id}
              recipe={recipe}
              onSeeRecipe={handleSeeRecipe}
              onRemoveRecipe={handleRemoveRecipe}
            />
          ))
        ) : (
          <p className={css.paragraph}>No recipes added yet</p>
        )}
      </div>
      {totalPages > 1 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

FavoritesList.propTypes = {
  children: PropTypes.node,
};

export default FavoritesList;
