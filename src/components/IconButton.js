import React from 'react';

const IconButton = ({ children, title, sr }) => {
  return (
    <button className='flex items-center bg-gray-50 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
      <span className='sr-only'>{sr}</span>
      {children}
      <span className='ml-1'>{title}</span>
    </button>
  );
};

export default IconButton;
