/* eslint-disable */
import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { GET_COUNT_USERS } from "../redux/countUserSlice";
import { setCountUser } from "../redux/countUserSlice";
import { setCurrentIP } from "../redux/currentIPSlice";
import { IIp } from "./types";
import { IComment } from "../redux/types";
import { setComments } from "../redux/chatSlice";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";

export let visits: string[] = [];
export let currentIP: string = "";

function* getCountUserWorker(): any {
  const payload = yield axios.get<string[]>(`${SERVER_URL}/visits`);
  // console.log("saga count worker");
  yield put(setCountUser(payload.data));
  const state = yield select();
  visits = state.countUser.values;
  // console.log(visits);
}

function* getCurrentIPWorker(): any {
  const payload = yield axios.get<IIp>(`${SERVER_URL}/ip`);
  // console.log("saga currentIP worker");
  yield put(setCurrentIP(payload.data.ipAddress));
  const state = yield select();
  currentIP = state.currentIP.value;
  // console.log(currentIP);
}

function* changeCountWorker(): any {
  // console.log("changecount sags");
  if (!visits.includes(currentIP)) {
    const requestData = {
      ipAddress: currentIP,
      entryTime: new Date().toUTCString(),
    };

    const config = {
      method: "post",
      url: `${SERVER_URL}/new-visit`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
    };

    yield axios(config).catch((error) => {
      console.log(error);
    });

    const updatedVisits = [...visits, currentIP];
    yield put(setCountUser(updatedVisits));
  }
}

function* getCommentsWorker(): any {
  const payload = yield axios.get<IComment[]>(`${SERVER_URL}/comments`);
  console.log("saga comment worker");
  // console.log(payload.data)
  yield put(setComments(payload.data));
}

export default function* countUserSaga() {
  // console.log("Saga started");

  yield takeEvery(GET_COUNT_USERS, function* () {
    yield all([call(getCountUserWorker), call(getCurrentIPWorker)]);
    yield call(changeCountWorker);
    yield call(getCommentsWorker);
  });
  
}
