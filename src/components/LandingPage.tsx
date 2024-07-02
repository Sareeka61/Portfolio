import React from 'react';
import HomeIcon from '../assets/navigations/home.png';
import AboutIcon from '../assets/navigations/about.png';
import ProjectsIcon from '../assets/navigations/projects.png';
import InvolvementsIcon from '../assets/navigations/involvements.png';
import BlogsIcon from '../assets/navigations/blog.png';
import ContactIcon from '../assets/navigations/contact.png';
import MyPhoto from '../assets/my-photo.jpeg';

const icons = [
  { icon: HomeIcon, text: 'Home' },
  { icon: AboutIcon, text: 'About' },
  { icon: ProjectsIcon, text: 'Projects' },
  { icon: InvolvementsIcon, text: 'Involvements' },
  { icon: BlogsIcon, text: 'Blogs' },
  { icon: ContactIcon, text: 'Contact' }
];

const LandingPage: React.FC = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0 bg-slate-900 backdrop-blur-sm'></div>

      <nav className='absolute lg:left-[460px] lg:top-[320px] md:left-[260px] md:top-[220px] sm:left-[160px] sm:top-[120px] z-20'>
        <ul className='text-white flex flex-col space-y-4'>
          {icons.map((item, index) => (
            <li key={index} className='cursor-pointer flex items-center group'>
              <img src={item.icon} alt={`${item.text} Icon`} className='w-6 h-6 mr-2' />
              <span className="opacity-0 bg-black text-white px-1 py-0.5 rounded-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className='relative z-10 flex flex-col justify-center items-center h-screen'>
        <div className="absolute lg:left-[700px] lg:top-[400px] md:left-[500px] md:top-[300px] sm:left-[300px] sm:top-[200px] text-2xl text-white">
          HI, THIS IS <br />
          <span className='text-4xl text-rose-400'>SARIKA GHIMIRE</span>
              <br /> <hr /> 
          <p text-l>Computer Science Student</p>
        </div>
        
        <div className="absolute lg:left-[1220px] lg:top-[280px] md:left-[1020px] md:top-[180px] sm:left-[820px] sm:top-[80px]">
          <div className="w-80 h-80 bg-white rounded-full overflow-hidden">
            <img src={MyPhoto} alt="Sarika's Photo" className="object-cover w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
