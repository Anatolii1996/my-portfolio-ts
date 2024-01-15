/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import indexPrevPageReduser from "./indexPrevPageSlice";
import countUserReduser from "./countUserSlice";
import currentIPReduser from "./currentIPSlice";
import commentsReducer from "./chatSlice";
import blockedUsersReducer from "./blockUserSlice";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    countUser: countUserReduser,
    currentIP: currentIPReduser,
    comments: commentsReducer,
    blockedUsers: blockedUsersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
