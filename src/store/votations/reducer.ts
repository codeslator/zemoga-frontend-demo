import { PayloadAction } from '@reduxjs/toolkit';
import { VotationsState } from './state';

export const incrementPositiveVotes = (state: VotationsState, { payload }: PayloadAction<string>) => {
  state.candidates.map((candidate) => {
    if (candidate.id === payload) {
      candidate.votes.positive += 1;
    }
  });
};

export const incrementNegativeVotes = (state: VotationsState, { payload }: PayloadAction<string>) => {
  state.candidates.map((candidate) => {
    if (candidate.id === payload) {
      candidate.votes.negative += 1;
    }
  });
};

export const voteAgain = (state: VotationsState, { payload }: PayloadAction<string>) => {
  state.candidates.map((candidate) => {
    if (candidate.id === payload) {
      candidate.hasVoted = false;
    }
  });
};

export const voteFinish = (state: VotationsState, { payload }: PayloadAction<string>) => {
  state.candidates.map((candidate) => {
    if (candidate.id === payload) {
      candidate.hasVoted = true;
    }
  });
};