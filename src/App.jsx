import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import FineArtsSociety from './components/FineArtsSociety';
import Members from './components/Members';
import About from './components/About';
import Events from './components/Events';

const App = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
      if (
        e.ctrlKey &&
        (e.key === 'u' || e.key === 'Shift' || e.key === 'I' || e.key === 'C' || e.key === 'J')
      ) {
        e.preventDefault();
      }
    });

    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
      document.removeEventListener('keydown', (e) => {});
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FineArtsSociety />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/members' element={<Members />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;
