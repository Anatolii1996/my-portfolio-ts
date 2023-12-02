import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ObjectId } from "mongodb";
import { IComment } from "./types";
import type { RootState } from "./store";

const initialState: IComment = {
    ipAddress: "",
    date: "",
    creatingTime: "",
    name: "",
    surname: "",
    comment: "",
    _id: "",
};
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IComment>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = action.payload;
    },
  },
});

export const { setComments } = chatSlice.actions;
export const selectComments = (state: RootState) => state.comments;
export default chatSlice.reducer;
