import React, { useState, useRef, useEffect } from 'react';
import CounterItem from './CounterItem';

const Counter: React.FC = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (observer && observer.unobserve && counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="pb-[150px] lg:pl-[230px] bg-primary p-8 flex flex-col items-center justify-center rounded"
    >
      <div className="mb-8"></div>
      <div className="flex flex-wrap gap-0 text-center text-white justify-center">
        <CounterItem initialValue={0} upperBound={4} label="Projects" speed={200} triggerAnimation={triggerAnimation} />
        <CounterItem initialValue={0} upperBound={7} label="Clubs Involvement" speed={150} triggerAnimation={triggerAnimation} />
        <CounterItem initialValue={0} upperBound={10} label="Awards" speed={200} triggerAnimation={triggerAnimation} />
        <CounterItem initialValue={0} upperBound={5} label="Certifications" speed={250} triggerAnimation={triggerAnimation} />
        <CounterItem initialValue={0} upperBound={40} label="Events Organized" speed={50} triggerAnimation={triggerAnimation} />
      </div>
    </div>
  );
};

export default Counter;
