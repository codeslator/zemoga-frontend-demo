import { createSlice } from "@reduxjs/toolkit";
import { votationsState } from "./state";
import * as votationsReducer from './reducer';

export const votationsSlice = createSlice({
  name: 'votations',
  initialState: votationsState,
  reducers: votationsReducer,
});

export const {
  incrementVotes: INCREMENT_VOTES,
  decrementVotes: DECREMENT_VOTES,
} = votationsSlice.actions;
export default votationsSlice.reducer; 