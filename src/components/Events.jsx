import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles/events/main.css';
import './styles/events/header.css';
import './styles/events/responsive.css';


const eventsData = [
    // Populate this array with your events data
    {
        title: "Tech Conference 2024",
        description: "Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.",
        rules: [
            "Registration required 48 hours before the event",
            "Bring your own laptop",
            "Virtual attendance option available",
            "Q&A sessions after each talk"
        ]
    },
    {
        title: "Web Development Workshop",
        description: "Learn modern web development techniques from expert developers in this hands-on workshop.",
        rules: [
            "Basic JavaScript knowledge required",
            "Limited to 30 participants",
            "Development environment setup guide provided",
            "Certificate upon completion"
        ]
    },
    {
        title: "Design Systems Seminar",
        description: "Explore the principles of creating and maintaining effective design systems.",
        rules: [
            "Open to designers and developers",
            "Portfolio review session included",
            "Networking lunch provided",
            "Take-home resources package"
        ]
    },
    {
        title: "Tech Conference 2024",
        description: "Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.",
        rules: [
            "Registration required 48 hours before the event",
            "Bring your own laptop",
            "Virtual attendance option available",
            "Q&A sessions after each talk"
        ]
    },
    {
        title: "Web Development Workshop",
        description: "Learn modern web development techniques from expert developers in this hands-on workshop.",
        rules: [
            "Basic JavaScript knowledge required",
            "Limited to 30 participants",
            "Development environment setup guide provided",
            "Certificate upon completion"
        ]
    },

];

const Events = () => {
    const navigate= useNavigate();
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (eventData) => {
        console.log("Opening Modal with data:", eventData);
        setModalData(eventData);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
        console.log("Closing Modal");
        setModalData(null);
        setIsModalOpen(false);
        document.body.style.overflow = '';
    };
    

    return (
        <div>
            <header className="header">
                <h1>Events</h1>
                <div className="controls">
                    <button className="home-button"  onClick={() => navigate('/')}>Home</button>
                </div>
            </header>

            <div className="container">
                <div className="events-container">
                    <div className="events-grid">
                        {eventsData.map((event, index) => (
                            <div key={index} className="event-card" style={{ '--animation-order': index }}>
                                <div className="event-card__content">
                                    <div className="event-card__text">
                                        <h3 className="event-card__title">{event.title}</h3>
                                        <p className="event-card__description">{event.description}</p>
                                    </div>
                                    <div className="event-card__buttons">
                                        <button className="btn btn--info" onClick={() => openModal(event)}>Info</button>
                                        <button className="btn btn--register">Register</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && modalData && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal__close" onClick={closeModal}>×</button>
                        <h2 className="modal__title">{modalData.title}</h2>
                        <p className="modal__info">{modalData.description}</p>
                        <div className="modal__rules">
                            <h3 className="modal__rules-title">Event Rules & Guidelines</h3>
                            <ul className="modal__rules-list">
                                {modalData.rules.map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="btn btn--register">Register Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
