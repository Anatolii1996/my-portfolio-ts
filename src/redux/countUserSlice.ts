import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { ICountState } from "./types";
import type { RootState } from "./store";

const initialState: ICountState = {
  values: [],
};
export const countUserSlice = createSlice({
  name: "countUser",
  initialState,
  reducers: {
    setCountUser: (state = initialState, action: PayloadAction<string[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.values = action.payload;
    },
  },
});

export const GET_COUNT_USERS = "countUserSlice/getCountUser";
export const getCountUser = createAction(GET_COUNT_USERS, () => ({
  payload: undefined,
}));

export const { setCountUser } = countUserSlice.actions;
export const selectVisits = (state: RootState) => state.countUser.values;
export default countUserSlice.reducer;
