import React, { useEffect, useState, useRef } from 'react';
import projectsData from './jsonfiles/projects.json';

interface Project {
  image: string;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className='bg-primary py-10'>
      <div className="relative w-[800px] mx-auto">
        <h1 className='text-4xl font-bold text-rose-400 flex justify-center pb-[8px]'>Projects</h1>
        <div
          ref={carouselRef}
          className="flex overflow-hidden"
          style={{ width: '100%', scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                
              </div>
              <div className="bg-white text-black p-4">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-400 text-white p-2 rounded-full">
          &lt;
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-400 text-white p-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
