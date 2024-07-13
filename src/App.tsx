import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <>
        <Navbar />
        <LandingPage />
        <About />
        <Counter />
        <SocialMedia />
        <Experience />
      </>
  );
};

export default App;
