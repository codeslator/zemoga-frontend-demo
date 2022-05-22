import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { default as useAuth } from './useAuth';
export { default as useUI } from './useUI';
export { default as useVotations } from './useVotations';
export { default as useWebsite } from './useWebsite';