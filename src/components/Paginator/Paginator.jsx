import css from "./Paginator.module.css";
import PropTypes from "prop-types";
import RightArrow from "../IconsSVG/RightArrow";
import LeftArrow from "../IconsSVG/LeftArrow";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  console.log("Rendering Pagination with:", { currentPage, totalPages });
  const pages = [...Array(totalPages).keys()].map((_, index) => index + 1);

  return (
    <>
      <div className={css.paginationContainer}>
        <button
          className={css.arrowButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <LeftArrow></LeftArrow>
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`${css.pageButton} ${
              currentPage === page ? css.active : ""
            }`}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}

        <button
          className={css.arrowButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <RightArrow></RightArrow>
        </button>
      </div>
    </>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Paginator;
