import { PayloadAction } from '@reduxjs/toolkit';
import { VotationsState } from './state';

export const incrementVotes = (state: VotationsState, { payload }: PayloadAction<number>) => {
  // state.candidates = payload;
};

export const decrementVotes = (state: VotationsState, { payload }: PayloadAction<number>) => {
  // state.layoutType = payload;
};

// export const voteAgain = (state: VotationsState, { payload }: PayloadAction<'grid' | 'list'>) => {
//   state.layoutType = payload;
// };