import { all, call } from "@redux-saga/core/effects";
import countUserSaga from "./countUserSaga";
import commentSaga from "./commentSaga";

const sagasList = [countUserSaga, commentSaga];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}
