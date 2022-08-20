import { Popover } from '@headlessui/react';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import useAppStore from '../../../zustand';
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const AppDrawer = ({ open, setOpen }: Props) => {
  const { isAuthenticated, setToken } = useAppStore(state => state);
  return (
    <Drawer open={open} anchor='left' onClose={() => setOpen(false)}>
      <div
        id='drawer-navigation'
        className='h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800'
        tabIndex={-1}
        aria-labelledby='drawer-navigation-label'
      >
        <h5
          id='drawer-navigation-label'
          className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
        >
          Menu
        </h5>
        <button
          type='button'
          data-drawer-dismiss='drawer-navigation'
          aria-controls='drawer-navigation'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
          onClick={() => setOpen(false)}
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto'>
          <ul className='space-y-2'>
            <li>
              <Link
                to='/'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                </svg>
                <span className='ml-3'>Home</span>
              </Link>
            </li>
            <li>
              <button
                type='button'
                className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                  Cart
                </span>
                {/* <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200'>
                  3
                </span> */}
              </button>
            </li>

            {isAuthenticated ? (
              <li>
                <Link
                  to='/profile'
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>Profile</span>
                </Link>
                <Link
                  to='/'
                  className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  onClick={() => setToken(null)}
                >
                  <LogoutIcon />
                  <span className='flex-1 ml-3 whitespace-nowrap'>Logout</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  >
                    <svg
                      aria-hidden='true'
                      className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Login In
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to='/signup'
                    className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  >
                    <svg
                      aria-hidden='true'
                      className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Sign Up
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;
