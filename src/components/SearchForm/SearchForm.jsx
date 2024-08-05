import PropTypes from "prop-types";
import ButonFancy from "../ButonFancy/ButonFancy";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSubmit }) => {
  return (
    <>
      <div>SearchForm</div>
      <form onSubmit={onSubmit}>
        <div className={css.fancyInput}>
          <input
            className={css.input}
            id='searchInput'
            type='text'
            placeholder='Enter the text'
          />
          <ButonFancy className={css.greenButton}>Submit</ButonFancy>
        </div>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
