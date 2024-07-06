import React, { useState, useEffect } from "react";
import HomeIcon from "../assets/navigations/home.png";
import AboutIcon from "../assets/navigations/about.png";
import ProjectsIcon from "../assets/navigations/projects.png";
import InvolvementsIcon from "../assets/navigations/involvements.png";
import BlogsIcon from "../assets/navigations/blog.png";
import ContactIcon from "../assets/navigations/contact.png";
import MyPhoto from "../assets/my-photo.jpeg";

const icons = [
  { icon: HomeIcon, text: "Home" },
  { icon: AboutIcon, text: "About" },
  { icon: ProjectsIcon, text: "Projects" },
  { icon: InvolvementsIcon, text: "Involvements" },
  { icon: BlogsIcon, text: "Blogs" },
  { icon: ContactIcon, text: "Contact" },
];

const LandingPage: React.FC = () => {
  const [isFixed, setIsFixed] = useState(true);
  const fixedPoint = 500;

  const handleScroll = () => {
    if (window.scrollY > fixedPoint) {
      setIsFixed(false);
    } else {
      setIsFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-slate-900">
      <div className="absolute inset-0 bg-slate-900 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 w-full mx-auto">
        <nav className="fixed lg:ml-[240px]">
          <ul className="text-white flex flex-col">
            {icons.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer flex flex-col items-center group"
              >
                <img
                  src={item.icon}
                  alt={`${item.text} Icon`}
                  className="w-6 h-6"
                />
                <span className="opacity-0 bg-black text-white rounded-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-center md:order-2 lg:ml-[600px] lg:mt-[-45px]">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 text-left">
            HI, THIS IS
          </p>
          <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl text-rose-400">
            SARIKA GHIMIRE
          </span>
          <hr className="my-2 border-white" />
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 text-left">
            Computer Science Student
          </span>

          <div className="flex justify-between mt-[40px]">
            <div className="bg-white rounded-full px-5 py-3 mr-12">
              <span className="text-slate-900 font-bold">Passionate</span>
            </div>
            <div className="bg-white rounded-full px-5 py-3 mr-12">
              <span className="text-rose-900 font-bold">Ambitious</span>
            </div>
            <div className="bg-white rounded-full px-5 py-3 mr-12">
              <span className="text-slate-900 font-bold">Proactive</span>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            isFixed ? "fixed top-[400px] right-40" : "absolute top-[600px] right-40"
          } w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full overflow-hidden md:order-3`}
        >
          <img
            src={MyPhoto}
            alt="Sarika's Photo"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
