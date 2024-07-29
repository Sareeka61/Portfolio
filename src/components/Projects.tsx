import React, { useEffect, useState, useRef } from 'react';
import projectsData from './jsonfiles/projects.json';

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string;
  githubLink: string;
  demoLink?: string;
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
    <div className='bg-primary py-10 '>
      <div className='p-[100px]'>
      <div className="relative mx-auto w-full max-w-4xl ">
        <h2 className='text-4xl font-bold text-rose-400 flex pb-[8px]'>PROJECTS</h2>
        <div
          ref={carouselRef}
          className="flex overflow-hidden relative"
          style={{ width: '100%', scrollBehavior: 'smooth' }}
        >
          {projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full">
              <img src={project.image} alt={project.title} className="w-full h-auto max-h-[400px] object-cover" />
              <div className="bg-rose-300 text-black p-4">
                <h4 className="text-2xl font-bold">{project.title}</h4>
                <p className='font-semibold'>Technologies Used: {project.technologies}</p>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="mt-4 space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded cursor-pointer inline-block">
                      View on GitHub
                    </a>
                  )}
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="border-primary border-2 text-primary px-4 py-2 rounded cursor-pointer inline-block">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-4">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 bg-gray-400 rounded-full ${index === currentIndex ? 'bg-gray-800' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
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
    </div>
  );
};

export default Projects;
