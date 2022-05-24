import { PayloadAction } from '@reduxjs/toolkit';
import { UIState } from './state';

export const setLayoutType = (state: UIState, { payload }: PayloadAction<string>) => {
  state.layoutType = payload;
};
