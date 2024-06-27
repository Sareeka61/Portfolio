import React from "react";
import { socials } from "../constants/index";
import logo from "../assets/SG.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white text-2xl p-6">
      <ul className="flex flex-col sm:flex-row justify-between items-center">
          <img className="text-4xl mb-4 sm:mb-0" src= {logo} height={60} width={60} alt="" />

        <ul className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
          {socials.map((item, index) => (
            <a
              key={item.id}
              href={item.url}
              target="__blank"
              className={`flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 ${index === socials.length - 1 ? 'mr-4 sm:mr-8' : ''}`}
            >
              <img
                src={item.iconUrl}
                width={24}
                height={24}
                alt={item.title}
              />
            </a>
          ))}

          <button className="border-2 border-white py-2 px-4 rounded-md">
            Resume
          </button>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
