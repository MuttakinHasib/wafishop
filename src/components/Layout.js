import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../store/_actions/authActions';
import Navbar from './Navbar';
import Notify from './Notify';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) {
      dispatch(fetchUser());
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Notify />
      {children}
    </div>
  );
};

export default Layout;
