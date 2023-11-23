import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import indexPrevPageReduser from "./indexPrevPageSlice";
import countUserReduser from "./countUserSlice";
import currentIPReduser from "./currentIPSlice"
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  devTools: true,
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    countUser: countUserReduser,
    currentIP: currentIPReduser
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
