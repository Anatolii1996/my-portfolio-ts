import { call, put, takeEvery, all, select } from "redux-saga/effects";
import { GET_COMMENTS } from "../redux/chatSlice";
import { setComments } from "../redux/chatSlice";
import { IComment } from "../redux/types";
import axios from "axios";

function* getCommentsWorker(): any {
    const payload = yield axios.get<IComment[]>("http://localhost:3002/comments");
    console.log("saga comment worker");
    // console.log(payload.data)
    yield put(setComments(payload.data));
  }

export default function* commentSaga() {
  console.log("commentSaga started");
  yield takeEvery(GET_COMMENTS, getCommentsWorker)
}
