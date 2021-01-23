import React from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Loading from './Loading';

const Notify = () => {
  const notify = useSelector(state => state.notify);
  console.log(notify);

  return (
    <>
      <ToastContainer />
      {notify.loading && <Loading />}
    </>
  );
};

export default Notify;
