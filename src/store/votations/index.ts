import { createSlice } from "@reduxjs/toolkit";
import { votationsState } from "./state";
import * as votationsReducer from './reducer';

export const votationsSlice = createSlice({
  name: 'votations',
  initialState: votationsState,
  reducers: votationsReducer,
});

export const {
  incrementPositiveVotes: INCREMENT_POSITIVE_VOTES,
  incrementNegativeVotes: INCREMENT_NEGATIVE_VOTES,
  voteAgain: VOTE_AGAIN,
  voteFinish: VOTE_FINISH,
} = votationsSlice.actions;
export default votationsSlice.reducer; 