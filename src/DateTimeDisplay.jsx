import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="card2 lg:px-5 px-3 hover:bg-zinc-800 py-2 lg:py-4">
      <div className={isDanger ? 'countdown danger' : 'countdown'}>
        <p>{value}</p>
        <span className='mt-2'>{type}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;