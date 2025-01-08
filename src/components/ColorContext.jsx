// ColorContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for managing background colors
const ColorContext = createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [backgroundColors, setBackgroundColors] = useState({
    text: '#fff',
    header: '#979797',
    navButton: '#333',
    navButtonLastChild: '#979797',
    navButtonLastChildText: '#000',
    authButtonHover: '#2b272e',
    authButtonBoxShadow: '0px 15px 20px rgba(81, 73, 87, 0.4)'
  });

  return (
    <ColorContext.Provider value={{ backgroundColors, setBackgroundColors }}>
      {children}
    </ColorContext.Provider>
  );
};
