import React from 'react';
import educationData from './jsonfiles/education.json';

const Education = () => {
  return (
    <div className="bg-primary p-12 mt-[-80px] flex justify-center items-center min-h-screen">
      <div className="space-y-4">
        {educationData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-md p-6 lg:h-[160px] lg:w-[800px] shadow-lg flex transition-transform transform hover:scale-105 hover:bg-white hover:cursor-pointer"
          >
            <img src={edu.icon} alt={`${edu.institution} icon`} className="w-16 h-16 mr-4" />
            <div className="flex-1">
              <h3>{edu.institution}</h3>
              <h4 className="text-gray-500">{edu.course} | {edu.date}</h4>
              <p className="text-gray-800 whitespace-pre-line">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
