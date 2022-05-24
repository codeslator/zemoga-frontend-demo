import { createSlice } from "@reduxjs/toolkit";
import { uiState } from "./state";
import * as uiReducer from './reducer';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiState,
  reducers: uiReducer,
});

export const {
  setLayoutType: SET_LAYOUT_TYPE,
} = uiSlice.actions;
export default uiSlice.reducer; 