import MainPageTitle from "../../components/MainPageTitle/MainPageTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchedRecipesList from "../../components/SearchedRecipesList/SearchedRecipesList";

const SearchPage = () => {
  return (
    <>
      <div>SearchPage</div>
      <MainPageTitle></MainPageTitle>
      <SearchBar></SearchBar>
      <SearchedRecipesList></SearchedRecipesList>
    </>
  );
};

export default SearchPage;
