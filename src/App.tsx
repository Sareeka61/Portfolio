import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Counter from './components/Counter';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <>
        <Navbar />
        <LandingPage />
        <About />
        <Counter />
        <SocialMedia />
        <Experience />
        <Education />
      </>
  );
};

export default App;
