import { CandidateData } from '../../global/interfaces';

export interface VotationsState {
  candidates: Array<CandidateData>;
}

export const votationsState: VotationsState = {
  candidates: [],
};