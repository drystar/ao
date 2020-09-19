import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
} from "./user.actions";

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
      signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWitEmail({payload: { email, password }})
 try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }

export function* OnEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWitEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSiginInStart)]);
}
