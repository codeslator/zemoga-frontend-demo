import { RootState } from ".";

export const selectUIState = (state: RootState) => state.ui;
export const selectWebsiteState = (state: RootState) => state.website;