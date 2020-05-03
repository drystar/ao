import { CartActionTypes } from "../cart/cart.actions";

const INITIAL_STATE = {
  hideen: true,
};

const cartReducer = (state = INITIAL_STATE, acion) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
