import userActionTypes from "./user.types";

const INITITAL_STATE = {
  currentUser: null,
  erro: null,
};

const userReducer = (state = INITITAL_STATE, action) => {
  switch (action.tpe) {
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

//modify reducer
