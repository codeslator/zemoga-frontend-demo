import { RootState } from ".";

export const selectAuthState = (state: RootState) => state.auth;
export const selectVotationsState = (state: RootState) => state.votations;
export const selectUIState = (state: RootState) => state.ui;
export const selectWebsiteState = (state: RootState) => state.website;