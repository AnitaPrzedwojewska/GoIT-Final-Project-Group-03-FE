// import css from "./MyRecipesList.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import MainTitle from "../MainTitle/MainTitle";
import MyRecipesItem from "../MyRecipesItem/MyRecipesItem";

const MyRecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const recipesPerPage = 4;

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        `http://localhost:8000/ownRecipes?page=${currentPage}&limit=${recipesPerPage}`
      );
      setRecipes(response.data.recipes);
      setTotalPages(Math.ceil(response.data.total / recipesPerPage));
    };
    fetchRecipes();
  }, [currentPage]);

  const handleSeeRecipe = (id) => {
    window.location.href = `/recipe/${id}`;
  };

  const handleRemoveRecipe = async (id) => {
    await axios.delete(`http://localhost:8000/ownRecipes/${id}`);
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <MainTitle title="My Recipes"></MainTitle>
      <div>
        {recipes.map((recipe) => (
          <MyRecipesItem
            key={recipe._id}
            recipe={recipe}
            onSeeRecipe={handleSeeRecipe}
            onRemoveRecipe={handleRemoveRecipe}
          />
        ))}
      </div>
      <div className="pagination">
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
