import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_COMMENTS } from "../redux/chatSlice";
import { setComments } from "../redux/chatSlice";
import { IComment, CreateCommentAction } from "../redux/types";
import axios from "axios";

function* getCommentsWorker(): any {
  const payload = yield axios.get<IComment[]>("http://localhost:3002/comments");
  console.log("saga comment worker");
  // console.log(payload.data)
  yield put(setComments(payload.data));
}



function* createCommentsWorker(action:CreateCommentAction) {
  console.log("saga Createcomment worker");
  const data = action.payload;
  // console.log(data)
  const requestData = {
    name: data.name,
    surname: data.surname, // Другие данные...
    comment: data.comment, // Другие данные...
  };

  const config = {
    method: "post",
    url: "http://localhost:3002/new-comment",
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
  console.log("commentSaga started");
  yield takeLatest(GET_COMMENTS, getCommentsWorker);
  yield takeLatest("comments/createComment", createCommentsWorker);
}
