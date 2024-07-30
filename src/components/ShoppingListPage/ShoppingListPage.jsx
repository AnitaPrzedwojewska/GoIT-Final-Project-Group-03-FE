// import css from "./ShoppingListPage.module.css";
import PropTypes from "prop-types";

const ShoppingListPage = ({ children }) => {
  return (
    <>
      <div>ShoppingListPage</div>
      <div>{children}</div>
    </>
  );
};

ShoppingListPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingListPage;
