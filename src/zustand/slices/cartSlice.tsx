import { StateCreator } from 'zustand';

interface ICartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartQuantity: number;
  cartItems: ICartItem[];
  setCartQuantity: (cartQuantity: number) => void;
  setCartItems: (cartItems: ICartItem[]) => void;
}

export const createCartSlice: StateCreator<
  CartState,
  [['zustand/devtools', any]],
  [],
  CartState
> = set => ({
  cartQuantity: 0,
  cartItems: [],
  setCartQuantity: () =>
    set(state => ({ cartQuantity: state.cartQuantity + 1 })),
  setCartItems: (cartItems: ICartItem[]) =>
    set(state => ({ cartItems: [...state.cartItems, cartItems[0]] })),
});
