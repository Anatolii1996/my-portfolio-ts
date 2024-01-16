/* eslint-disable */
import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import {
  BlockUserAction,
  CreateCommentAction,
  DeleteCommentAction,
} from "../redux/types";
import { ICommentData } from "./types";
import { isNotNewMessage } from "../redux/chatSlice";
import { isCurrentOwner } from "../redux/isOwnerSlice";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";

function* createCommentsWorker(action: CreateCommentAction): any {
  console.log("saga Createcomment worker");
  const data = action.payload;
  const isOwner = yield select(isCurrentOwner);
  // console.log(data)
  const requestData:ICommentData = {
    name: data.name,
    surname: data.surname, // Другие данные...
    comment: data.comment,
    
  };

  if (isOwner) {
    requestData.isOwnerAuthor = true;
  }


  const config = {
    method: "post",
    url: `${SERVER_URL}/new-comment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
  };
  yield axios(config).catch((error) => {
    console.log(error);
  });
}

function* blockUserWorker(action: BlockUserAction) {
  console.log("saga BlockCommentAction worker");
  // console.log(action.payload);

  const config = {
    method: "post",
    url: `${SERVER_URL}/addBlockedUsers`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(action.payload), // Преобразуйте данные в JSON-строку
  };
  yield axios(config).catch((error) => {
    console.log(error);
  });
}

function* deleteCommentWorker(action: DeleteCommentAction) {
  // console.log("saga DeleteCommentAction worker");
  // console.log(action.payload)
  const requestData = {
    ipAddress: action.payload,
  };

  const config = {
    method: "delete",
    url: `${SERVER_URL}/delete-comment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
  };
  yield axios(config).catch((error) => {
    console.log(error);
  });
}

function* deleteAndBlockCommentWorker(action: any) {
  // Вызываем deleteCommentWorker и ждем, пока он завершится
  yield call(deleteCommentWorker, action);

  // После того, как deleteCommentWorker завершится, вызываем blockUserWorker
  yield call(blockUserWorker, action);
}

function* createNewMessageWorker(action: any) {
  // Вызываем deleteCommentWorker и ждем, пока он завершится
  // console.log("notNewMessageWorker");
  yield call(createCommentsWorker, action);
  yield delay(2000);
  yield put(isNotNewMessage());
}

export default function* commentSaga() {
  // // console.log("commentSaga started");
  yield takeEvery("comments/createComment", createNewMessageWorker);
  yield takeEvery("comments/deleteComment", deleteAndBlockCommentWorker);
}
