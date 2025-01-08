import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles/home/buttons.css';
import './styles/home/main.css';
import './styles/home/animations.css';
import './styles/home/contact-modal.css';
import './styles/home/navbar.css';
  import './styles/home/responsive.css';

const backgrounds = [
  { 
    url: "url('/images/image1.jpg')", 
    color: { 
      text: '#fff', 
      header: '#979797', 
      navButton: '#333', 
      navButtonLastChild: '#979797', // Color for last button
      navButtonLastChildText: '#000', // Text color for last button
      authButtonHover: '#2b272e', 
      authButtonBoxShadow: '0px 15px 20px rgba(81, 73, 87, 0.4)' 
    }
  },
  { 
    url: "url('/images/image2.jpg')", 
    color: { 
      text: '#fff', 
      header: '#b5d2f7', 
      navButton: '#1e4463', 
      navButtonLastChild: '#78c2ff', // Color for last button
      navButtonLastChildText: '#0c2b45', // Text color for last button
      authButtonHover: '#F3B989', 
      authButtonBoxShadow: '0px 15px 20px rgba(70, 130, 180, 0.4)' 
    }
  },
  { 
    url: "url('/images/image3.jpg')", 
    color: { 
      text: '#e8e8e8', 
      header: '#c7c7c7', 
      navButton: '#444', 
      navButtonLastChild: '#eee', // Color for last button
      navButtonLastChildText: '#333', // Text color for last button
      authButtonHover: '#4682b4', 
      authButtonBoxShadow: '0px 15px 20px rgba(70, 130, 180, 0.4)' 
    }
  },
];

const FineArtsSociety = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    let index = 0;

    const changeBackground = () => {
      setCurrentBackground(index); // Update background and colors
      document.body.style.backgroundImage = backgrounds[index].url;
      
      // Change text color
      document.querySelector('h1').style.color = backgrounds[index].color.text;
      document.querySelectorAll('h1')[1].style.color = backgrounds[index].color.header; // Update second h1

      // Change .nav-bar button background color
      const navButtons = document.querySelectorAll('.nav-bar button');
      navButtons.forEach((button, i) => {
        if (i === navButtons.length - 1) {
          // Last button styles (last-child)
          button.style.backgroundColor = backgrounds[index].color.navButtonLastChild;
          button.style.color = backgrounds[index].color.navButtonLastChildText;
        } else {
          // Other buttons
          button.style.backgroundColor = backgrounds[index].color.navButton;
        }
      });

      // Change .auth-buttons button hover styles
      const authButtons = document.querySelectorAll('.auth-buttons button');
      authButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = backgrounds[index].color.authButtonHover;
          button.style.boxShadow = backgrounds[index].color.authButtonBoxShadow;
        });
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '';
          button.style.boxShadow = '';
        });
      });

      index = (index + 1) % backgrounds.length; // Loop through images
    };
    // Change background every 5 seconds
    const interval = setInterval(changeBackground, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  const [isModalActive, setModalActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate= useNavigate();

  const navigateTo = (page) => {
    // Smooth button animation
    const button = document.activeElement;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      window.location.href = `${page}.html`;
    }, 200);
  };

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if (e.target.className.includes('contact-modal') && !isClosing) {
        closeModal();
      }
    };

    const closeModal = () => {
      setIsClosing(true);
      setTimeout(() => {
        setModalActive(false);
        setIsClosing(false);
      }, 600); // Matches animation duration
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isClosing]);

  return (
    <div>
      <header>
        <div className="logo">
          <img src="./images/faslogo.png" width="110px" alt="FAS Logo" />
        </div>
        <div className="auth-buttons">
          <button onClick={() => navigateTo('signin')}><span>Sign In</span></button>
          <button><span>Register</span></button>
        </div>
      </header>

      <div className="content">
        <h1 style={{ color: '#c7c7c7' }}>FINE ARTS</h1>
        <h1 style={{ color: '#8a8a8a' }}>SOCIETY</h1>
        <p>Where The Creativity Begins</p>
      </div>

      <div className="nav-bar">
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/gallery')}>Gallery</button>
        <button onClick={() => navigate('/members')}>Members</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button id="contactBtn" onClick={() => setModalActive(true)}>Contact</button>
        <button onClick={() => navigate('/events')}>Events!</button>
      </div>

      {isModalActive && (
        <div className={`contact-modal ${isClosing ? 'closing' : ''} active`}>
          <div className="contact-content">
            <button className="close-modal" onClick={() => setModalActive(false)}>x</button>
            <h2 className="contact-title">Something to ask?</h2>
            <div className="contact-buttons">
              <a href="mailto:contact@fineartssociety.com" className="contact-button email-btn">Email Us</a>
              <a href="https://linkedin.com/company/nitj-fineartssociety" target="_blank" className="contact-button linkedin-btn">LinkedIn</a>
              <a href="https://instagram.com/fineartssociety" target="_blank" className="contact-button instagram-btn">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FineArtsSociety;
