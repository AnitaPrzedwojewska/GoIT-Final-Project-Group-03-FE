import FancyButton from "../BtnFancy/BtnFancy";
import css from "./SearchForm.module.css";
import PropTypes from "prop-types";

const SearchForm = ({ onSubmit }) => {
  return (
    <>
      <div>SearchForm</div>
      <form onSubmit={onSubmit}>
        <div className={css.fancyInput}>
          <input
            className={css.input}
            id="searchInput"
            type="text"
            placeholder="Enter the text"
          />
          <FancyButton className={css.greenButton}>Submit</FancyButton>
        </div>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
