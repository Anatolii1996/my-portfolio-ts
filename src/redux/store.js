import { configureStore } from '@reduxjs/toolkit'
import indexPrevPageReduser from './indexPrevPageSlice'

export const store = configureStore({
  reducer: {
    indexPrevPage: indexPrevPageReduser 
  },
})