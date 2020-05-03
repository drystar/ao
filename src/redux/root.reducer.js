// ROOT REDUCER
// base reducer that represnets all of the state of the app | combines all of the other states together

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
