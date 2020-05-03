<<<<<<< HEAD
import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
=======
import { CartActionTypes } from "../cart/cart.actions";

const INITIAL_STATE = {
  hideen: true,
};

const cartReducer = (state = INITIAL_STATE, acion) => {
  switch (userActionTypes.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
>>>>>>> 7735ac947eef96cb43d7d2062ff32d1d6bbe44f1
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
