import React from 'react';
import CounterItem from './CounterTime'

const Counter: React.FC = () => {

  return (
    <div className="pb-[150px] lg:pl-[230px] bg-primary p-8 flex flex-col items-center justify-center rounded">
      <div className="mb-8">
      </div>
      <div className="flex flex-wrap gap-0 text-center text-white justify-center">
        <CounterItem initialValue={0} upperBound={4} label="Projects" speed={200} />
        <CounterItem initialValue={0} upperBound={7} label="Clubs Involvement" speed={150} />
        <CounterItem initialValue={0} upperBound={10} label="Awards" speed={200} />
        <CounterItem initialValue={0} upperBound={5} label="Certifications" speed={250} />
        <CounterItem initialValue={0} upperBound={40} label="Events Organized" speed={50} />
      </div>
    </div>
  );
};

export default Counter;