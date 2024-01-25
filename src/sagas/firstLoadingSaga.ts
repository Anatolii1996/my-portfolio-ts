/* eslint-disable */
import { call, put, takeEvery, all, select, fork } from "redux-saga/effects";

import { GET_COUNT_USERS } from "../redux/countUserSlice";
import { getCountUsers, incrementCountUser } from "../redux/countUserSlice";
import { getOwns } from "../redux/userSlice";
import { getCommentsFail } from "../redux/chatSlice";
import { getBlockedUsers } from "../redux/blockUserSlice";
import { isNewUser, isNewUserValue } from "../redux/userSlice";
import { changeBlockedStatus } from "../redux/userSlice";

import { IComment } from "../redux/types";
import { setComments } from "../redux/chatSlice";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";
import { v4 } from "uuid";

function* getCountUserWorker(): any {
  // console.log("saga count worker");
  try {
    const payload = yield axios.get<string[]>(`${SERVER_URL}/visits`);
    // console.log(isBoolean(payload.data.count) )
    if(payload.data.count){
       yield put(getCountUsers(payload.data.count));
    }else{
      changeCountWorker()
    }
   
  } catch (error) {
    console.error("Error fetching count user:", (error as Error).message);
  }
}

function* getOwnsWorker(): any {
  // console.log("saga owns worker");

  if (localStorage.getItem("isOwner") === null) {
    // Если записи нет, устанавливаем значение "isOwner" в false
    yield put(isNewUser(true));
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

function* changeCountWorker(): any {
  // console.log("changecount sags");
  const isNewUser = yield select(isNewUserValue);
  // console.log(isNewUser)
  if (isNewUser) {
    const requestData = {
      userId: v4(),
      // entryTime: new Date().toUTCString(),
    };

    const config = {
      method: "post",
      url: `${SERVER_URL}/new-visit`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
    };

    try {
      const payload = yield axios(config);
      // console.log(payload.data.userId);
      localStorage.setItem("userId", payload.data.userId);
      yield put(incrementCountUser());
    } catch (error) {
      console.error("Error posting new visit:", (error as Error).message);
    }
  }
}

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

function* getBlockedUsersWorker(): any {
  // console.log("blocked saga started");
  try {
    const payload = yield axios.get<string[]>(`${SERVER_URL}/getBlockedUsers`);
    // console.log(payload.data);
    yield put(getBlockedUsers(payload.data));
    const userId = localStorage.getItem("userId");
    if(payload.data.includes(userId)){
      console.log("blocked user")
      yield put(changeBlockedStatus(true));
    }
  } catch (error) {
    console.error("Error fetching blockedUsers:", (error as Error).message);
  }
}

function* fakeRecordWorker(): any {
  // console.log(" fakeRecord saga started");
  const config = {
    method: "post",
    url: `${SERVER_URL}/start-record`,
    headers: {
      "Content-Type": "application/json",
    } // Преобразуйте данные в JSON-строку
  };

  try {
     yield axios(config);
    // console.log(payload.data.userId);
   
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}

export default function* countUserSaga() {
  // console.log("Saga started");

  yield takeEvery(GET_COUNT_USERS, function* () {
    yield all([call(getCountUserWorker), call(getOwnsWorker)]);
    yield call(changeCountWorker);
    yield call(fakeRecordWorker);
    yield call(getBlockedUsersWorker);
    yield fork(getCommentsWorker);
  });
}
