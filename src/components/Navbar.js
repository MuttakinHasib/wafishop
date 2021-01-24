import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import IconButton from './IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/_actions/authActions';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <nav className='bg-gray-50 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/'>
                <a className='text-2xl p-1'>Wafishop</a>
              </Link>
            </div>
            {/* <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                 
                  <a
                    href='/'
                    className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Dashboard
                  </a>
                  <a
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Team
                  </a>
                  <a
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Projects
                  </a>
                  <a
                    href='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  >
                    Calendar
                  </a>
                </div>
              </div> */}
          </div>
          <div className='absolute space-x-5 inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6'>
            <Link href='/cart'>
              <a>
                <IconButton title='Cart' sr='View Carts'>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                </IconButton>
              </a>
            </Link>

            {!auth.user ? (
              <Link href='/login'>
                <a>
                  <IconButton title='Sign in' sr='Sign in page'>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </IconButton>
                </a>
              </Link>
            ) : (
              <div className='relative'>
                <div>
                  <button
                    className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white items-center'
                    id='user-menu'
                    aria-haspopup='true'
                    onClick={() => setIsOpen(prev => !prev)}
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src={auth?.user?.avatar}
                      alt=''
                    />
                    <span className='ml-3 text-gray-800 font-semibold'>
                      {auth?.user?.name}
                    </span>
                  </button>
                </div>
                <Transition
                  show={isOpen}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <div
                    className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu'
                  >
                    <Link href='/profile'>
                      <a
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        role='menuitem'
                        onClick={() => setIsOpen(false)}
                      >
                        Your Profile
                      </a>
                    </Link>
                    <a
                      href='/'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Settings
                    </a>
                    <button
                      className='flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                      onClick={() => {
                        dispatch(logout());
                        setIsOpen(false);
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                </Transition>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*
        Mobile menu, toggle classes based on menu state.
    
        Menu open: "block", Menu closed: "hidden"
      */}
      {/* <div className='hidden sm:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            
            <a
              href='/'
              className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Dashboard
            </a>
            <a
              href='/'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Team
            </a>
            <a
              href='/'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Projects
            </a>
            <a
              href='/'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            >
              Calendar
            </a>
          </div>
        </div> */}
    </nav>
  );
};

export default Navbar;
