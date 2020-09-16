const { takeLatest, put } = require("redux-saga/effects");

import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../Firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const userRef = yeild auth.signInWithPopup(googleProvider)
    console.log(userRef)
}  catch(error) {}
}

export function* onGoogleSignIn() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}