import React from 'react';
import experiencesData from './jsonfiles/experience.json';

const Experience: React.FC = () => {
  return (
    <div className="bg-primary p-12 mt-[-80px]">
      <span className="lg:ml-[350px] text-4xl font-bold text-rose-400 block sm:inline">EXPERIENCES</span>
      <div className="lg:ml-[350px] text-white sm:m-12 lg:mx-0 space-y-8 text-[17px]">
        {experiencesData.experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-purple-200 rounded-lg p-6 lg:h-[280px] lg:w-[1300px] shadow-lg flex transition-transform transform hover:scale-105 hover:bg-purple-300 hover:cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold text-rose-400">
                {exp.promoted_position && exp.promoted_position.title ? exp.promoted_position.title : exp.title}
              </h3>
              {exp.promoted_position && exp.promoted_position.title && (
                <p className="text-sm text-gray-400">
                  Promoted to {exp.promoted_position.title} since {exp.promoted_position.date_since}
                </p>
              )}
              {exp.company_name && <p className="text-gray-500">{exp.company_name}</p>}
              {exp.company_location && <p className="text-gray-500">{exp.company_location}</p>}
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
            <div className="ml-auto text-right">
              {exp['job-type'] && <p className="text-gray-500">{exp['job-type']}</p>}
              <p className="mt-2 text-sm text-gray-500">{exp.date_from} - {exp.date_to}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
