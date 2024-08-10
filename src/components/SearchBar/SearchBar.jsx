// import css from "./SearchBar.module.css";

import SearchForm from "../SearchForm/SearchForm";
import SearchTypeSelector from "../SearchTypeSelector/SearchTypeSelector";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};

export default SearchBar;
