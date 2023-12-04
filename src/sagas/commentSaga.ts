import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {  CreateCommentAction } from "../redux/types";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";



function* createCommentsWorker(action:CreateCommentAction) {
  // console.log("saga Createcomment worker");
  const data = action.payload;
  // console.log(data)
  const requestData = {
    name: data.name,
    surname: data.surname, // Другие данные...
    comment: data.comment, // Другие данные...
  };

  const config = {
    method: "post",
    url: `${SERVER_URL}/new-comment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(requestData), // Преобразуйте данные в JSON-строку
  };
  axios(config).catch((error) => {
    console.log(error);
  });
}

export default function* commentSaga() {
  // console.log("commentSaga started");
 
  yield takeLatest("comments/createComment", createCommentsWorker);
}
