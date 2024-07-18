import React, { useState, useEffect } from 'react';

interface CounterItemProps {
  initialValue: number;
  upperBound: number;
  label: string;
  speed: number;
  triggerAnimation: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({
  initialValue,
  upperBound,
  label,
  speed,
  triggerAnimation,
}) => {
  const [number, setNumber] = useState(initialValue);

  useEffect(() => {
    if (!triggerAnimation) return;

    let currentNumber = initialValue;
    const interval = setInterval(() => {
      currentNumber++;
      setNumber(currentNumber);
      if (currentNumber >= upperBound) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [triggerAnimation, initialValue, upperBound, speed]);

  return (
    <div className="p-4 bg-[#3c2939] rounded shadow text-white h-48 w-64 flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">
        {number >= upperBound ? `${upperBound}+` : number}
      </div>
      <div>{label}</div>
    </div>
  );
};

export default CounterItem;
