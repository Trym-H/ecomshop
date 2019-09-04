import { createSelector } from "reselect";

//input-selector: gets whole state, returns slice of it
const selectCart = state => state.cart;

//first argument is an array of input-selectors
//second argument is a function that returns the value we want out of the selector
//arguments in the function must be in the same order as they are listed in the array.
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
