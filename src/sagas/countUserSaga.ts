/* eslint-disable */
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_COUNT_USERS } from "../redux/countUserSlice";
import { setCountUser } from "../redux/countUserSlice";
import axios from "axios";

function* getCountUserWorker(): any {
  const payload = yield axios.get<string[]>("http://localhost:3002/visits");
  console.log(payload.data)
  yield put(setCountUser(payload.data))
}

export default function* countUserSaga() {
  console.log("Saga started");
  yield takeEvery(GET_COUNT_USERS, getCountUserWorker);
}
