import React, { useState } from 'react';
import * as experiencesData from './jsonfiles/experience.json';

const Experience: React.FC = () => {
  const [openDescription, setOpenDescription] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setOpenDescription(openDescription === index ? null : index);
  };

  return (
    <div className="bg-primary p-12 flex justify-center items-center min-h-screen">
      <div className="space-y-4 w-full max-w-3xl">
        {experiencesData.experiences.map((exp: any, index: number) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md p-6 shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:bg-white hover:cursor-pointer"
          >
            <div className="flex items-center">
              {exp.icon && <img src={exp.icon} alt={`${exp.company_name} icon`} className="w-16 h-16 mr-4" />}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-rose-400">
                  {exp.promoted_position && exp.promoted_position.title ? exp.promoted_position.title : exp.title}
                </h3>
                {exp.promoted_position && exp.promoted_position.title && (
                  <p className="text-sm text-gray-500">
                    Promoted to {exp.promoted_position.title} since {exp.promoted_position.date_since}
                  </p>
                )}
                {exp.company_name && <p className="text-gray-600 font-semibold">{exp.company_name}</p>}
                {exp.company_location && <p className="text-gray-500">{exp.company_location}</p>}
                {exp["job-type"] && <p className="text-gray-500">{exp["job-type"]}</p>}
                <p className="mt-2 text-sm text-gray-600">{exp.date_from} - {exp.date_to}</p>
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="ml-auto text-right text-gray-600 focus:outline-none whitespace-pre-line"
              >
                {openDescription === index ? '▼' : '►'}
              </button>
            </div>
            {openDescription === index && (
              <div className="mt-2">
                <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
