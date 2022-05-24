import { createSlice } from "@reduxjs/toolkit";
import { authState } from "./state";
import * as authReducer from './reducer';

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: authReducer,
});

export const {
  login: LOGIN,
  logout: LOGOUT,
} = authSlice.actions;
export default authSlice.reducer; 