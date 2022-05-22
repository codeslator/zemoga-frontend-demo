export interface HeroData {
  hairline: string;
  title: string;
  description: string;
  callToAction: string;
};

export interface BannerData {
  hairline?: string;
  title: string;
  text?: string;
  callToAction?: string;
}

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

export interface AuthenticatedUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
}