import { configureStore } from '@reduxjs/toolkit'
import indexPrevPageReduser from './indexPrevPageSlice'
import { type } from 'os';

 const store = configureStore({
  reducer: {
    indexPrevPage: indexPrevPageReduser 
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


  