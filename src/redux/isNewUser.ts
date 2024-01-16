/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOwnState } from "./types";

const initialState: IOwnState = {
  value: false,
};

export const isNewUserSlice = createSlice({
  name: "isNewUser",
  initialState,
  reducers: {
    setUserStatus: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});
export const { setUserStatus } = isNewUserSlice.actions;
export default isNewUserSlice.reducer;
