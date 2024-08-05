import BtnFancy from "../BtnFancy/BtnFancy";
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
          <BtnFancy className={css.greenButton}>Submit</BtnFancy>
        </div>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
