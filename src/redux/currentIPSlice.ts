/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentIP } from "./types";

const initialState: ICurrentIP = {
  value: "",
};
export const currentIPSlice = createSlice({
  name: "currentIP",
  initialState,
  reducers: {
    setCurrentIP: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

export const { setCurrentIP } = currentIPSlice.actions;
export default currentIPSlice.reducer;
