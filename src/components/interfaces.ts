export interface Votes {
  possitive: number;
  negative: number;
}

export interface CandidateData {
  picture?: string;
  name: string;
  description: string;
  lastUpdate: string;
  hasVoted: boolean;
  category: string;
  votes: Votes;
}