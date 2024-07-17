import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Counter from './components/Counter';
import Education from './components/Education';
import Awards from './components/Awards';
import Involvement from './components/Involvement';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <LandingPage />
        <About />
        <Counter />
        <SocialMedia />
        <Involvement />
        <div className="transition-all duration-500 flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/experience" />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
          <Projects />
        </div>
      </div>
    </Router>
  );
};

export default App;
