import { userActionTypes } from "./user.types";

const INITITAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITITAL_STATE, action) => {
  switch (action.tpe) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
