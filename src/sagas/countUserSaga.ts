/* eslint-disable */
import { call, put, takeEvery, all } from "redux-saga/effects";
import { GET_COUNT_USERS } from "../redux/countUserSlice";
import { setCountUser } from "../redux/countUserSlice";
import { setCurrentIP } from "../redux/currentIPSlice"; 
import { IIp } from "./types";
import axios from "axios";

function* getCountUserWorker(): any {
  const payload = yield axios.get<string[]>("http://localhost:3002/visits");
  console.log("saga count worker")
  yield put(setCountUser(payload.data))
}

function* getCurrentIPWorker(): any {
  const payload = yield axios.get<IIp>("http://localhost:3002/ip");;
  console.log("saga currentIP worker")
  yield put(setCurrentIP(payload.data.ipAddress))
}

export default function* countUserSaga() {
  console.log("Saga started");
  yield all ([
     takeEvery(GET_COUNT_USERS, getCountUserWorker),
     takeEvery(GET_COUNT_USERS, getCurrentIPWorker),
  ])
  
 
}
