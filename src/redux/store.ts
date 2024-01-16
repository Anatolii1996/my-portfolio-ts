/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import indexPrevPageReduser from "./indexPrevPageSlice";
import isOwnReducer from "./isOwnerSlice"
import commentsReducer from "./chatSlice";
import blockedUsersReducer from "./blockUserSlice";
import countUserReducer from "./countUserSlice";
import isNewUserReducer from "./isNewUser";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    isOwner: isOwnReducer,
    isNewUser: isNewUserReducer,
    countUsers: countUserReducer,
    comments: commentsReducer,
    blockedUsers: blockedUsersReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
