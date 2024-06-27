import React from 'react';
import '../constants/index';

const LandingPage: React.FC = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-slate-900 backdrop-blur-sm'></div>

      <nav className='absolute left-4 top-4 z-20'>
        <ul className='text-white flex flex-col space-y-4'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>Experience</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Contact Us</li>
        </ul>
      </nav>

      <div className='relative z-10 flex flex-col justify-center items-center h-screen'>
        <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-slate-400">
          SARIKA GHIMIRE
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
