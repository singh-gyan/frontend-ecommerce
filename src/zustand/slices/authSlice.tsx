import { StateCreator } from 'zustand';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
}

export const createAuthSlice: StateCreator<
  AuthState,
  [['zustand/devtools', any]],
  [],
  AuthState
> = set => ({
  token: null,
  isAuthenticated: false,
  setToken: (token: string | null) =>
    set({ token: token, isAuthenticated: !!token }),
});
