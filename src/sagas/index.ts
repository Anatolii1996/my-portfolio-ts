/* eslint-disable */
import { all, call } from "@redux-saga/core/effects";
import firstLoadingSaga from "./firstLoadingSaga";
import commentSaga from "./commentSaga";

const sagasList = [firstLoadingSaga, commentSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
