import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/members/layout.css';
import './styles/members/header.css';
import './styles/members/cards.css';
import './styles/members/animations.css';
import './styles/members/responsive.css';

const membersData = [
    {
        id: 1,
        name: "Alex Chen",
        year: "First Year",
        image: "/images/pt1.jpeg",
        instagram: "https://instagram.com/alexchen",
        role: "Digital Artist",
        specialty: "3D Modeling"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        year: "Second Year",
        image: "/images/pt2.jpeg",
        instagram: "https://instagram.com/sarahj",
        role: "Photographer",
        specialty: "Portrait Photography"
    },
    {
        id: 3,
        name: "Michael Lee",
        year: "Third Year",
        image: "/images/pt3.jpeg",
        instagram: "https://instagram.com/michaellee",
        role: "Sculptor",
        specialty: "Metal Work"
    },
    {
        id: 4,
        name: "Emma Wilson",
        year: "Fourth Year",
        image: "/images/pt4.jpeg",
        instagram: "https://instagram.com/emmaw",
        role: "Painter",
        specialty: "Oil Painting"
    },
    {
        id: 5,
        name: "David Park",
        year: "Second Year",
        image: "/images/pt5.jpeg",
        instagram: "https://instagram.com/davidp",
        role: "Illustrator",
        specialty: "Digital Art"
    },
    {
        id: 6,
        name: "Lisa Zhang",
        year: "Third Year",
        image: "/images/pt6.jpeg",
        instagram: "https://instagram.com/lisaz",
        role: "Mixed Media",
        specialty: "Installation Art"
    },
    {
        id: 7,
        name: "David Park",
        year: "Second Year",
        image: "/images/pt7.jpeg",
        instagram: "https://instagram.com/davidp",
        role: "Illustrator",
        specialty: "Digital Art"
    },
    {
        id: 8,
        name: "David Park",
        year: "Second Year",
        image: "/images/pt8.jpeg",
        instagram: "https://instagram.com/davidp",
        role: "Illustrator",
        specialty: "Digital Art"
    },
    {
        id: 9,
        name: "David Park",
        year: "Second Year",
        image: "/images/pt9.jpeg",
        instagram: "https://instagram.com/davidp",
        role: "Illustrator",
        specialty: "Digital Art"
    },
    {
        id: 10,
        name: "David Park",
        year: "Second Year",
        image: "/images/pt10.jpeg",
        instagram: "https://instagram.com/davidp",
        role: "Illustrator",
        specialty: "Digital Art"
    },
];

function Members() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [filteredMembers, setFilteredMembers] = useState(membersData);
    const navigate= useNavigate();

    useEffect(() => {
        filterMembers();
    }, [searchTerm, selectedYear]);

    const filterMembers = () => {
        const filtered = membersData.filter((member) => {
            const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesYear = selectedYear === 'all' || member.year === selectedYear;
            return matchesSearch && matchesYear;
        });
        setFilteredMembers(filtered);
    };

    return (
        <div>
            <header className="header">
                <h1>Our Members</h1>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="controls">
                    <select
                        className="filter-select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="all">All Years</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Fourth Year">Fourth Year</option>
                    </select>
                    {/* Home Button */}
                    <button onClick={() => navigate('/')} className="home-button">
                        Home
                    </button>
                </div>
            </header>

            <main className="members-container">
                <div className="members-grid">
                    {filteredMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="member-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                                loading="lazy"
                            />
                            <div className="member-overlay">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-year">{member.year}</p>
                                <p className="member-specialty">{member.specialty}</p>
                                <div className="social-links">
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        title="Follow on Instagram"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Members;
