// import css from "./SearchTypeSelector.module.css";
import PropTypes from "prop-types";

const SearchTypeSelector = () => {
  return (
    <select>
      <option value="all">All</option>
      <option value="beef">Beef</option>
    </select>
  );
};

SearchTypeSelector.propTypes = {
  children: PropTypes.node,
};

export default SearchTypeSelector;
