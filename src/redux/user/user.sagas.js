import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../Firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    console.log(userRef);
    const userSnapShot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
