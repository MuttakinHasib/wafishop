import React from 'react';

const Input = ({ name, innerRef, icon, ...props }) => {
  return (
    <div className='flex flex-col mb-4'>
      <div className='relative h-11'>
        <div className='absolute flex left-0 top-0 h-full w-10'>
          <div className='flex items-center justify-center z-10 bg-gray-50 rounded-lg text-gray-600 text-lg h-full w-full'>
            {icon}
          </div>
        </div>
        <input
          id={name}
          name={name}
          className='text-sm font-light sm:text-base relative w-full bg-gray-50 rounded-lg placeholder-gray-400  focus:border-gray-400 focus:outline-none py-2 pr-2 pl-12 h-full'
          ref={innerRef}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
