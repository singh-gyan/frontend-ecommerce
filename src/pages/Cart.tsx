import useAppStore from '../zustand';

const Cart = () => {
  const isAu = useAppStore(state => state.isAuthenticated);
  console.log(isAu);
  return <div>Cart</div>;
};

export default Cart;
