import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

export const GET_COUNT_USERS = "countUserSlice/getOwns";
export const getCountUser = createAction(GET_COUNT_USERS, () => ({
  payload: undefined,
}));