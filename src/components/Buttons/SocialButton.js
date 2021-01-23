import React from 'react';

const SocialButton = ({ icon, onClick }) => {
  return (
    <button
      className='border rounded-2xl flex items-center p-3 justify-center w-16 hover:bg-gray-50 hover:border-transparent transition-colors duration-300'
      {...{ onClick }}
    >
      {icon}
    </button>
  );
};

export default SocialButton;
