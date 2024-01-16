/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOwnState, INewUserState } from "./types";

const initialState: IOwnState = {
  value: false,
};

export const isNewUserSlice = createSlice({
  name: "isNewUser",
  initialState,
  reducers: {
    isNewUser: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const isNewUserValue = (state:INewUserState) => state.isNewUser.value;

export const { isNewUser } = isNewUserSlice.actions;
export default isNewUserSlice.reducer;
