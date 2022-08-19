import { StateCreator } from 'zustand';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string | null) => void;
}

export const createAuthSlice: StateCreator<
  AuthState,
  [['zustand/devtools', never]],
  [],
  AuthState
> = set => ({
  token: null,
  isAuthenticated: false,
  setToken: (token: string | null) =>
    set({ token: token, isAuthenticated: !!token }),
});
