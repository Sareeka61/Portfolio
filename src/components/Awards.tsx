import React from 'react';
import awardsData from './jsonfiles/awards.json';

const Education = () => {
  return (
    <div className="bg-primary p-12 mt-[-80px] flex justify-center items-center min-h-screen">
      <div className="space-y-4">
        {awardsData.awards.map((awards, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-6 lg:h-auto lg:w-[800px] shadow-lg flex transition-transform transform hover:scale-105 hover:bg-white hover:cursor-pointer"
          >
            <img src={awards.icon} alt={`${awards.organizer} icon`} className="w-16 h-16 mr-4" />
            <div className="flex-1">
              <h3 className='text-rose-400 text-xl font-bold '>{awards.title}</h3>
              <h4 className="text-gray-500">{awards.organizer}</h4>
              <h4 className="text-gray-500">{awards.date}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
