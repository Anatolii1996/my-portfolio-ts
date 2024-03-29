/* eslint-disable */
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import indexPrevPageReduser from "./indexPrevPageSlice";
import userRedecer from "./userSlice";
import commentsReducer from "./chatSlice";
import countUserReducer from "./countUserSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    currentUser: userRedecer,
    countUsers: countUserReducer,
    comments: commentsReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
