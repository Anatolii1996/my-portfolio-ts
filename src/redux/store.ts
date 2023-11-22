import { configureStore } from '@reduxjs/toolkit'
import indexPrevPageReduser from './indexPrevPageSlice'
import countUserReduser from "./countUserSlice"

 const store = configureStore({
  reducer: {
    indexPrevPage: indexPrevPageReduser,
    countUser: countUserReduser
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


  