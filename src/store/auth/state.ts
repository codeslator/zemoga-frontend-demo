import { AuthenticatedUser } from "../../global/interfaces";

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthenticatedUser | undefined;
}

export const authState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};