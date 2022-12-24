/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default-member */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
