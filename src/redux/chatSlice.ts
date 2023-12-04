import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment, IMessage, ICommentStatee } from "./types";

const initialState: ICommentStatee = {
  messages: [],
  errors: "",
};
export const chatSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state = initialState, action: PayloadAction<IComment[]>) => {
      state.messages = action.payload;
    },
    getCommentsFail:(state = initialState, action: PayloadAction<string>)=>{
      state.errors = action.payload;
    },
    createComment: (state = initialState, action: PayloadAction<IMessage>) => {
      const newComment = {
        ipAddress: process.env.REACT_APP_MY_IP,
        name: action.payload.name,
        surname: action.payload.surname,
        comment: action.payload.comment,
      };
      state.messages=[newComment, ...state.messages]
     
    },
  },
});

export const { setComments, createComment,getCommentsFail } = chatSlice.actions;
export default chatSlice.reducer;
