import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set your target date here
  const targetDate = new Date('2025-07-21T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format number to always have two digits
  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className="flex justify-center items-center gap-4  rounded-xl">
      {[
        { label: 'DAYS', value: format(timeLeft.days) },
        { label: 'HRS', value: format(timeLeft.hours) },
        { label: 'MINS', value: format(timeLeft.minutes) },
        { label: 'SECS', value: format(timeLeft.seconds) },
      ].map((unit, index) => (
        <div
          key={index}
          className="text-white border-2 border-white rounded-xl xl:px-6 lg:px-6 xl:py-4 lg:py-4 px-2 py-2 text-center xl:w-[100px] lg:w-[100px] sm:w-[50px]"
        >
          <div className="xl:text-2xl lg:text-2xl text-xl font-extrabold">{unit.value}</div>
          <div className="text-xs font-semibold">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
