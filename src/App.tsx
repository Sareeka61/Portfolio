import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Experience from './components/Experience';

const App: React.FC = () => {
  return (
      <>
      <Navbar />
      <LandingPage />
      <About />
      <Experience />
      </>
  );
};

export default App;
