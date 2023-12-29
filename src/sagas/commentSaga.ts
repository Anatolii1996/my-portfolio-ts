import { takeEvery } from "redux-saga/effects";
import { CreateCommentAction, DeleteCommentAction } from "../redux/types";
import { SERVER_URL } from "../helpers/const";
import axios from "axios";

function* createCommentsWorker(action: CreateCommentAction) {
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
  yield axios(config).catch((error) => {
    console.log(error);
  });
}

function* blockUserWorker(action: DeleteCommentAction) {
  console.log("saga DeleteCommentAction worker");
  // const data = action.payload;
  // console.log(data)
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

export default function* commentSaga() {
  // console.log("commentSaga started");
  yield takeEvery("comments/createComment", createCommentsWorker);
  yield takeEvery("comments/deleteComment", blockUserWorker);
}
