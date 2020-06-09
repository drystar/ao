import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsStart(){
  yeild takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, )
}