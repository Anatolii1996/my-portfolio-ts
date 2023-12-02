import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { IComment, IMessage } from "./types";
import type { RootState } from "./store";

const initialState: IComment[] = [];
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IMessage[]>) => {
      
      
      return [...state, ...action.payload];
    },
  },
});

export const GET_COMMENTS = "chatSlice/getComments";
export const getComments = createAction(GET_COMMENTS);

export const { setComments } = chatSlice.actions;
export const selectComments = (state: RootState) => state.comments;
export default chatSlice.reducer;
