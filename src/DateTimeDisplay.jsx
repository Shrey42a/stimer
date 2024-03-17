import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="card2 cursor-pointer hover:bg-teal-500 lg:py-4 md:py-4 py-14 px-14 sm:px-4 md:px-8 lg:px-8 flex w-max items-center justify-center text-center">
      <div id='jj' className={isDanger ? 'countdown danger' : 'countdown'}>
        <p className='text-7xl lg:text-5xl'>{value}</p>
        <span className='text-yellow-400'>{type}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;