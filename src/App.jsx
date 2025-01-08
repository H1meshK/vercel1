import React from 'react';
import './App.css'; // You can include any global styles here
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Gallery from './components/Gallery'; // Import the component
import FineArtsSociety from './components/FineArtsSociety';
import Members from './components/Members'; // Import the component
import About from './components/About';
import Events from './components/Events';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FineArtsSociety/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>

      </Routes>
    </Router>
  );
};

export default App;