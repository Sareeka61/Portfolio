import React, { useState } from "react";
import logo from "../assets/SG.png";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";
import HomeIcon from "../assets/navigations/home.png";
import AboutIcon from "../assets/navigations/about.png";
import ProjectsIcon from "../assets/navigations/projects.png";
import InvolvementsIcon from "../assets/navigations/involvements.png";
import BlogsIcon from "../assets/navigations/blog.png";
import ContactIcon from "../assets/navigations/contact.png";

interface NavItem {
  icon: string;
  text: string;
  link: string;
}

const icons: NavItem[] = [
  { icon: HomeIcon, text: "Home", link: "#home" },
  { icon: AboutIcon, text: "About", link: "#about" },
  { icon: ProjectsIcon, text: "Projects", link: "#projects" },
  { icon: InvolvementsIcon, text: "Involvements", link: "#involvements" },
  { icon: BlogsIcon, text: "Blogs", link: "#blogs" },
  { icon: ContactIcon, text: "Contact", link: "#contact" },
];

const textLinks: { text: string; link: string }[] = [
  { text: "Home", link: "#home" },
  { text: "About", link: "#about" },
  { text: "Projects", link: "#projects" },
  { text: "Involvements", link: "#involvements" },
  { text: "Blogs", link: "#blogs" },
  { text: "Contact", link: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Large devices */}
      <nav className="text-2xl p-6 hidden md:flex justify-between items-center bg-primary text-white pr-24">
        <img className="text-4xl" src={logo} height={60} width={60} alt="" />
        <ul className="flex flex-row space-x-10 items-center">
          {textLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="flex items-center">
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Small and medium devices */}
      <nav className="text-2xl p-6 md:hidden flex justify-between items-center bg-primary text-white">
        <img className="text-4xl" src={logo} height={60} width={60} alt="" />
        <img
          src={menuOpen ? CloseIcon : MenuIcon}
          alt="Menu Icon"
          className="w-8 h-8 cursor-pointer"
          onClick={toggleMenu}
        />
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-75 z-20 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src={CloseIcon}
              alt="Close Icon"
              className="w-8 h-8 cursor-pointer mb-8"
              onClick={toggleMenu}
            />
            <ul className="text-2xl flex flex-col items-center space-y-4">
              {icons.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  <a href={item.link} onClick={toggleMenu} className="flex items-center space-x-2">
                    <img src={item.icon} alt="Navigation Icon" className="w-6 h-6" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
