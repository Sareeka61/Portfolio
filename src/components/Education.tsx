import React from 'react';
import educationData from './jsonfiles/education.json';

const Education = () => {
  return (
    <div className="bg-primary p-12 flex justify-center items-center min-h-screen">
      <div className="space-y-4 w-full max-w-3xl">
        {educationData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-6 shadow-lg flex transition-transform transform hover:scale-105 hover:bg-white hover:cursor-pointer"
          >
            <img src={edu.icon} alt={`${edu.institution} icon`} className="w-16 h-16 mr-4" />
            <div className="flex-1">
              <h3 className="text-rose-400 text-xl font-bold">{edu.institution}</h3>
              <h4 className="text-gray-500">{edu.course} | {edu.date}</h4>
              <p className="text-gray-800 whitespace-pre-line">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
