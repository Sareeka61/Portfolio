import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MyPhoto from "../assets/sarika.png";

const LandingPage: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const fixedPoint = 500;
  const handleScroll = () => {
    const shouldFix = window.scrollY <= fixedPoint;
    setIsFixed(shouldFix);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative lg:min-h-[850px] bg-primary">
      <Navbar />
      <div className="absolute inset-0 bg-primary backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-0">
        <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-16 lg:flex-row lg:gap-16">
          <div
            className={`transition-all duration-300 ${
              isFixed
                ? "lg:fixed lg:top-[400px] lg:right-24"
                : "lg:absolute lg:top-[100px] lg:right-8"
            }`}
          >
            <div className="relative lg:mr-[180px]">
              <div className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-rose-300 rounded-full"></div>
              <img
                src={MyPhoto}
                alt="Sarika's Photo"
                className="object-cover w-28 h-28 sm:w-50 sm:h-50 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full"
                style={{
                  position: "relative",
                  zIndex: 10,
                  top: -24,
                  boxShadow: "0px 9px 16px rgba(24, 44, 188, 0.9)",
                }}
              />
            </div>
          </div>

          <div className="text-center lg:text-left mt-24 lg:mr-[380px]">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400">
              HI, THIS IS
            </p>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-rose-400">
              SARIKA GHIMIRE
            </span>
            <hr className="my-2 border-white w-16 sm:w-20 md:w-24 lg:w-32" />
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400">
              Computer Science Student
            </span>

            <div className="flex flex-col md:flex-row justify-center lg:justify-start mt-4 md:mt-8 gap-4 md:gap-8">
              <div className="bg-white rounded-full px-4 py-2 md:px-6 md:py-3">
                <span className="text-slate-900 font-bold text-sm md:text-base">
                  Passionate
                </span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 md:px-6 md:py-3">
                <span className="text-rose-900 font-bold text-sm md:text-base">
                  Ambitious
                </span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 md:px-6 md:py-3">
                <span className="text-slate-900 font-bold text-sm md:text-base">
                  Proactive
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/path/to/your/resume.pdf"
                className="text-rose-400 text-xl underline px-6 py-2 rounded-full inline-block ml-[-23px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
