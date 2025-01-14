import React from 'react';
import { NavLink } from 'react-router-dom';

const Involvement: React.FC = () => {
  return (
    <section id="#involvements">
    <div className="bg-primary py-4 px-8 flex justify-center items-center">
      <nav className="space-x-4">
        <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "text-black font-bold *:transition-all duration-500 bg-white p-4 rounded-full" : "text-white font-bold hover:text-gray-300 transition-all duration-500"
          }
        >
          Education
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "text-black font-bold *:transition-all duration-500 bg-white p-4 rounded-full" : "text-white font-bold hover:text-gray-300 transition-all duration-500"
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/awards"
          className={({ isActive }) =>
            isActive ? "text-black font-bold *:transition-all duration-500 bg-white p-4 rounded-full" : "text-white font-bold hover:text-gray-300 transition-all duration-500"
          }
        >
          Awards
        </NavLink>
      </nav>
    </div>
    </section>
  );
};

export default Involvement;
