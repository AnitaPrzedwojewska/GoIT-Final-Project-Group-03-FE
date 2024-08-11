import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteMyRecipe from "../../api/recipes/deleteMyRecipe";
import getMyRecipes from "../../api/recipes/getMyRecipes";
import Notiflix from "notiflix";
import MyRecipesItem from "../MyRecipesItem/MyRecipesItem";
import Paginator from "../Paginator/Paginator";

const MyRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recipesPerPage = 4;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getMyRecipes(currentPage, recipesPerPage);

        if (response && response.data) {
          const { results, total } = response.data;
          setRecipes(results || []);
          const calculatedTotalPages = total
            ? Math.ceil(total / recipesPerPage)
            : 1;
          setTotalPages(calculatedTotalPages);
        } else {
          setRecipes([]);
          setTotalPages(1);
        }
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
    const response = await deleteMyRecipe(id);
    if (!response.error) {
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
      Notiflix.Notify.success("Recipe deleted successfully!");
    } else {
      Notiflix.Notify.failure("Error deleting recipe. Try again!");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className={css.container}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <MyRecipesItem
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

MyRecipesList.propTypes = {
  children: PropTypes.node,
};

export default MyRecipesList;
