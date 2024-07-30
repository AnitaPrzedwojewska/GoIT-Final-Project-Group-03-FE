// import css from "./IngredientsShoppingList.module.css";
import PropTypes from "prop-types";

const IngredientsShoppingList = ({ children }) => {
  return (
    <>
      <div>IngredientsShoppingList</div>
      <div>{children}</div>
    </>
  );
};

IngredientsShoppingList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IngredientsShoppingList;
