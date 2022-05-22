import { createSlice } from "@reduxjs/toolkit";
import { websiteState } from "./state";
import * as websiteReducer from './reducer';

export const websiteSlice = createSlice({
  name: 'website',
  initialState: websiteState,
  reducers: websiteReducer,
});

export const {} = websiteSlice.actions;
export default websiteSlice.reducer; 