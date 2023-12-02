import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { IComment, IMessage } from "./types";
import type { RootState } from "./store";

const initialState: IComment[] = [];
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IComment[]>) => {
      const uniqueCommentIds = new Set(state.map(comment => comment._id));
      const uniqueComments = action.payload.filter(comment => !uniqueCommentIds.has(comment._id));
      return [...state, ...uniqueComments];
    },
    createComment: (state = initialState, action: PayloadAction<IMessage>) => {
      const newComment = {
        ipAddress: process.env.REACT_APP_MY_IP,
        name: action.payload.name,
        surname: action.payload.surname,
        comment: action.payload.comment,
      };
      return [newComment, ...state ]
    },
  },
});

export const GET_COMMENTS = "chatSlice/getComments";
export const getComments = createAction(GET_COMMENTS);

export const { setComments, createComment } = chatSlice.actions;
export const selectComments = (state: RootState) => state.comments;
export default chatSlice.reducer;
