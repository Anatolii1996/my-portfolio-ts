import { all, call } from "@redux-saga/core/effects";
import countUserSaga from "./countUserSaga";

const sagasList = [
    countUserSaga,
  
];

export default function* rootSaga() {
  yield all(sagasList.map((saga) => call(saga)));
}