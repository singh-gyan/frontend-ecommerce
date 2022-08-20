import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartSVG from '../../../assets/CartSVG';
import UserSVG from '../../../assets/UserSVG';
import Dropdown from '../Dropdown';
import { Popover } from '@headlessui/react';
const UserList = ['Profile', 'Orders', 'Logout'];
const CartItems = [];
const UserActions = () => {
  const [showUserList, setShowUserList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleAccountClick = () => {
    setShowUserList(!showUserList);
  };
  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  return (
    <div className='flex items-center ml-8'>
      <div className='flex items-center border-gray-100 divide-x divide-gray-100 border-x'>
        <span>
          <button
            onClick={handleCartClick}
            className='block p-6 border-b-4 border-transparent hover:border-blue-600
          relative '
          >
            <CartSVG />
            <span className='sr-only'>Cart</span>
          </button>
        </span>

        <Popover className='relative'>
          {({ open }) => (
            <>
              <Popover.Button
                // onClick={handleAccountClick}
                className='hidden lg:block p-6 border-b-4 border-transparent hover:border-blue-600'
              >
                <UserSVG />

                <span className='sr-only'> Account </span>
              </Popover.Button>
              <Popover.Panel>
                <Dropdown
                  items={UserList}
                  showUserList={showUserList}
                  setShowUserList={setShowUserList}
                />
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default UserActions;
