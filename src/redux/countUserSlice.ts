import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const GET_COUNT_USERS = "countUserSlice/getCountUsers";
export const getCountUser = createAction(GET_COUNT_USERS, () => ({
  payload: undefined,
}));

const initialState: IOwnState = {
    value: false,
  };
  
  export const isOwnSlice = createSlice({
    name: "isOwner",
    initialState,
    reducers: {
      getOwns: (state, action: PayloadAction<boolean>) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = action.payload;
      },
    },
  });
  export const { getOwns } = isOwnSlice.actions;
  export default isOwnSlice.reducer;
  
