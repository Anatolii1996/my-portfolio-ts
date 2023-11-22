import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { IPage } from "./types";
import type { RootState } from "./store";

const initialState: IPage = {
  value: 0,
};

export const countUserSlice = createSlice({
  name: "countUser",
  initialState,
  reducers: {
    setCountUser: (state = initialState, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const GET_COUNT_USERS = "countUserSlice/getCountUser";
export const getCountUser = createAction(GET_COUNT_USERS);
export const { setCountUser } = countUserSlice.actions;
export const selectPage = (state: RootState) => state.indexPrevPage.value;
export default countUserSlice.reducer;