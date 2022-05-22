import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from './auth';
import votationsReducer from './votations';
import uiReducer from './ui';
import websiteReducer from './website';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    votations: votationsReducer,
    ui: uiReducer,
    website: websiteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;