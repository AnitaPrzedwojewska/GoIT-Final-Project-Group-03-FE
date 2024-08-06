// import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainTitle from "../MainTitle/MainTitle";
import MyRecipesItem from "../MyRecipesItem/MyRecipesItem";
import deleteMyRecipe from "../../api/recipes/deleteMyRecipe";
import getMyRecipes from "../../api/recipes/getMyRecipes";

const MyRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recipesPerPage = 4;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getMyRecipes(currentPage, recipesPerPage);
      if (response.error) {
        console.error("Error fetching recipes:", response.error);
      } else {
        if (response.data && response.data.results) {
          setRecipes(response.data.results);
          setTotalPages(Math.ceil(response.data.total / recipesPerPage));
        } else {
          setRecipes([]);
          setTotalPages(1);
        }
      }
    };
    fetchRecipes();
  }, [currentPage]);

  const handleSeeRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleRemoveRecipe = async (id) => {
    const response = await deleteMyRecipe(id);
    if (!response.error) {
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } else {
      console.error("Error deleting recipe:", response.error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <MainTitle title="My Recipes"></MainTitle>
      <div>
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
          <p>No recipes added yet</p>
        )}
      </div>
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

MyRecipesList.propTypes = {
  children: PropTypes.node,
};

export default MyRecipesList;
