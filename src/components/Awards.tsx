import React from 'react';
import awardsData from './jsonfiles/awards.json';

const Awards = () => {
  return (
    <div className="bg-primary p-12 flex justify-center items-center min-h-screen">
      <div className="space-y-4 w-full max-w-3xl">
        {awardsData.awards.map((award, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-6 shadow-lg flex transition-transform transform hover:scale-105 hover:bg-white hover:cursor-pointer"
          >
            <img src={award.icon} alt={`${award.organizer} icon`} className="w-16 h-16 mr-4" />
            <div className="flex-1">
              <h3 className="text-rose-400 text-xl font-bold">{award.title}</h3>
              <h4 className="text-gray-500">{award.organizer}</h4>
              <h4 className="text-gray-500">{award.date}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
