import MainTitle from "../../components/MainTitle/MainTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchedRecipesList from "../../components/SearchedRecipesList/SearchedRecipesList";

const SearchPage = () => {
  return (
    <>
      <MainTitle>Search</MainTitle>
      <SearchBar></SearchBar>
      <SearchedRecipesList></SearchedRecipesList>
    </>
  );
};

export default SearchPage;
