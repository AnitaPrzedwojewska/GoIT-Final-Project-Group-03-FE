import PropTypes from "prop-types";
import css from "./SearchTypeSelector.module.css";

const SearchTypeSelector = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <span>Search by:</span>
      <select className={css.select} value={value} onChange={onChange}>
        <option className={css.option} value="title">
          Title
        </option>
        <option className={css.option} value="ingredients">
          Ingredients
        </option>
      </select>
    </div>
  );
};

SearchTypeSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchTypeSelector;
