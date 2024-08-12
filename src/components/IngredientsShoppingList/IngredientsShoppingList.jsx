import { useEffect, useState } from "react";

import Notiflix from "notiflix";

import getShoppingList from "../../api/recipes/getShoppingList.js";
import deleteFromShoppingList from '../../api/recipes/deleteFromShoppingList.js';

import css from "./IngredientsShoppingList.module.css";
// import PropTypes from "prop-types";

const IngredientsShoppingList = () => {

  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        const response = await getShoppingList();
        console.log("fetchShoppingList - response: ", response);
        setShoppingList(response);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    console.log("Uruchomiony useEffect.");
    fetchShoppingList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleShoppingList = async (event, ingredientId, measure) => {
    try {
      const input = event.target;
      input.disable = true;
      console.log("ingredientId: ", ingredientId);
      console.log("measure: ", measure);
      const response = await deleteFromShoppingList({ ingredientId, measure });
      if (!response.error) {
        Notiflix.Notify.success("Ingredient added to shopping list.");
      } else {
        Notiflix.Notify.warning("Ingredient is already in your shopping list!");
      }
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(
        "Something went wrong. Ingredient not added to shopping list!"
      );
    }
  };

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
      {!shoppingList ? (
        <p>Sorry, something went wrong, </p>
      ) : (
        <ul className={css.ingredientContainer}>
          {shoppingList.length > 0 &&
            shoppingList.map((listItem) => (
              <li className={css.ingredient} key={listItem._id}>
                <div className={css.ingredientContentName}>
                  <div className={css.ingredientImg}>
                    <img
                      src={listItem.ingredient.thb}
                      alt={listItem.ingredient.ttl}
                    />
                  </div>
                  <div className={css.name}>{listItem.ingredient.ttl}</div>
                </div>
                <div className={css.ingredientContentMeasure}>
                  <div className={css.measure}>
                    {listItem.measure}
                  </div>
                  <input
                    type='checkbox'
                    name='inShoppingList'
                    className={css.checkbox}
                    onMouseUp={(e) => {
                      console.log("handleShoppingList will start");
                      console.log("listItem.id._id: ", listItem.id._id);
                      console.log(
                        "params: ",
                        listItem.ingredient._id,
                        listItem.measure
                      );

                      handleShoppingList(
                        e,
                        listItem.ingredient._id,
                        listItem.measure
                      );
                    }}></input>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

// IngredientsShoppingList.propTypes = {
//   children: PropTypes.node,
// };

export default IngredientsShoppingList;
