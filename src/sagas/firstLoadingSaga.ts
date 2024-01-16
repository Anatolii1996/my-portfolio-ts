/* eslint-disable */
import { call, put, takeEvery, all, select, fork } from "redux-saga/effects";

import { GET_COUNT_USERS } from "../redux/countUserSlice";
import { getCountUsers } from "../redux/countUserSlice";
import { getOwns } from "../redux/isOwnerSlice";
import { getCommentsFail } from "../redux/chatSlice";
import { getBlockedUsers } from "../redux/blockUserSlice";
import { setUserStatus } from "../redux/isNewUser";

import { IIp } from "./types";
import { IComment } from "../redux/types";
import { setComments } from "../redux/chatSlice";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function* getCountUserWorker(): any {
  console.log("saga count worker");
  try {
    const payload = yield axios.get<string[]>(`${SERVER_URL}/visits`);
    // console.log(payload.data.length)
    yield put(getCountUsers(payload.data.length));
  } catch (error) {
    console.error("Error fetching count user:", (error as Error).message);
  }
  // console.log(visits);
}

function* getOwnsWorker(): any {
  console.log("saga owns worker");

  if (localStorage.getItem("isOwner") === null) {
    // Если записи нет, устанавливаем значение "isOwner" в false
    yield put(setUserStatus(true));
    localStorage.setItem("isOwner", "false");
  } else {
    // Если запись существует, проверяем соответствие значения true
    const isOwnerValue = localStorage.getItem("isOwner");
    if (isOwnerValue === "true") {
      // Ваш код, который выполняется, если значение "isOwner" равно true
      yield put(getOwns(true));
    }
  }
}

// function* changeCountWorker(): any {
//   // console.log("changecount sags");
//   if (!visits.includes(currentIP)) {
//     const requestData = {
//       ipAddress: currentIP,
//       entryTime: new Date().toUTCString(),
//     };

//     const config = {
//       method: "post",
//       url: `${SERVER_URL}/new-visit`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
//     };

//     try {
//       yield axios(config);

//       const updatedVisits = [...visits, currentIP];
//       yield put(setCountUser(updatedVisits));
//     } catch (error) {
//       console.error("Error posting new visit:", (error as Error).message);
//     }
//   }
// }

function* getCommentsWorker(): any {
  // console.log("saga comment worker");
  try {
    const payload = yield axios.get<IComment[]>(`${SERVER_URL}/comments`);

    // console.log(payload.data)
    yield put(setComments(payload.data));
  } catch (error) {
    yield put(getCommentsFail("Не вдалось завантажити коментарі"));
    console.error("Error fetching comments:", (error as Error).message);
  }
}

// function* getBlockedUsersWorker(): any {
//   // console.log("blocked saga started");
//   try {
//     const payload = yield axios.get<string[]>(`${SERVER_URL}/getBlockedUsers`);
// // console.log(payload.data)
//     yield put(getBlockedUsers(payload.data));

//     if(payload.data.includes(currentIP)){
//       yield put({ type: 'blockedUsers/changeBlockedStatus', payload: true });
//     }
//   } catch (error) {
//     console.error("Error fetching blockedUsers:", (error as Error).message);
//   }
// }

export default function* countUserSaga() {
  console.log("Saga started");

  yield takeEvery(GET_COUNT_USERS, function* () {
    yield all([call(getCountUserWorker), call(getOwnsWorker)]);
    // yield call(changeCountWorker);
    // yield call(getBlockedUsersWorker);
    yield fork(getCommentsWorker);
  });
}
