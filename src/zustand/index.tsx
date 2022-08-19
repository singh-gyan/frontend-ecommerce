import create from 'zustand';
import { AuthState, createAuthSlice } from './slices/authSlice';
import { devtools } from 'zustand/middleware';
import { CartState, createCartSlice } from './slices/cartSlice';

const useAppStore = create<AuthState & CartState>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
    ...createCartSlice(...a),
  }))
);

export default useAppStore;
