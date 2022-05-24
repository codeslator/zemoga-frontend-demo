import { PayloadAction } from '@reduxjs/toolkit';
import { AuthenticatedUser } from '../../global/interfaces';
import { AuthState } from './state';

export const login = (state: AuthState, { payload }: PayloadAction<AuthenticatedUser>) => {
  state.isAuthenticated = true;
  state.user = payload;
};

export const logout = (state: AuthState) => {
  state.isAuthenticated = false;
  state.user = undefined;
};