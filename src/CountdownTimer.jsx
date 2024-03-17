import React from 'react';
import { useCountdown } from './useCountdown';
import { ShowCounter } from "./ShowCounter";
import Message from "./Message";
import Message2 from './Message2';

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <><Message /><Message2 /></>;
  }
  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <h3 className="text-gray-200 text-3xl uppercase font-mono text-emerald-300">Wait</h3>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </>
  );
};