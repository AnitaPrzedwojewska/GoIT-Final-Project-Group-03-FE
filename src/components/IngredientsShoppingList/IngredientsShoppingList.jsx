import css from "./IngredientsShoppingList.module.css";
import PropTypes from "prop-types";

const IngredientsShoppingList = ({ children }) => {
  return (
    <>
        <div className={css.ingredientHeader}>
        <div className={css.ingredientHeaderName}>
            <p>Products</p>
        </div>
        <div className={css.ingredientHeaderSpecify}>
            <p>Number</p>
            <p className={css.addToListHeadline}>Remove</p>
        </div>
      </div>
    </>
  );
};

IngredientsShoppingList.propTypes = {
  children: PropTypes.node,
};

export default IngredientsShoppingList;
