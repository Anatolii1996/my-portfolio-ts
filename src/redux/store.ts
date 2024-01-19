/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import indexPrevPageReduser from "./indexPrevPageSlice";
import userRedecer from "./userSlice";
import commentsReducer from "./chatSlice";
import blockedUsersReducer from "./blockUserSlice";
import countUserReducer from "./countUserSlice";

import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    currentUser: userRedecer,
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
