import { Badge, Button, IconButton, BadgeProps } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Pane } from '../styled/GeneralStyles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import useAppStore from '../../zustand';
import UserActions from '../molecules/UserActions';
import MenuSVG from '../../assets/MenuSVG';
import Drawer from '../molecules/Drawer';
import AppDrawer from '../molecules/Drawer';

const Navbar = () => {
  const isAuthenticated = useAppStore(state => state.isAuthenticated);
  const [open, setOpen] = useState(false);
  return (
    <header className='border-b border-gray-100 sticky'>
      <div className='flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <button
            type='button'
            className='p-2 sm:mr-4 lg:hidden'
            onClick={() => setOpen(true)}
          >
            <MenuSVG />
          </button>
          <AppDrawer open={open} setOpen={setOpen} />
          <Link to='/' className='flex'>
            <span className='inline-block w-32 h-10 rounded-lg hover:bg-blue-100 text-center text-[1.3em] '>
              Apni Dukaan
            </span>
          </Link>
        </div>

        <div className='flex items-center justify-end flex-1'>
          <nav className='hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex'>
            <Link
              to='/about'
              className='block h-16 leading-[4rem] border-b-4 border-transparent hover:text-blue-600 hover:border-current'
            >
              About
            </Link>

            <Link
              to='/products'
              className='block h-16 leading-[4rem] border-b-4 border-transparent hover:text-blue-600 hover:border-current'
            >
              Products
            </Link>

            <Link
              to='/contact'
              className='block h-16 leading-[4rem] border-b-4 border-transparent hover:text-blue-600 hover:border-current'
            >
              Contact
            </Link>
          </nav>
          {isAuthenticated ? (
            <UserActions />
          ) : (
            <div className='items-center hidden space-x-4 lg:flex ml-6'>
              <Link
                className='px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg'
                to='/login'
              >
                Log in
              </Link>
              <Link
                className='px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg'
                to='/signup'
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navbar);
