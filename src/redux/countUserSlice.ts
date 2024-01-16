import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountUsers } from "./types";

export const GET_COUNT_USERS = "countUserSlice/getCountUsers";
export const firstLoading = createAction(GET_COUNT_USERS, () => ({
  payload: undefined,
}));

const initialState: ICountUsers = {
    value: 0,
  };
  
  export const countUserSlice = createSlice({
    name: "countUsers",
    initialState,
    reducers: {
      getCountUsers: (state, action: PayloadAction<number>) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload;
      },
    },
  });
  export const { getCountUsers } = countUserSlice.actions;
  export default countUserSlice.reducer;
  
