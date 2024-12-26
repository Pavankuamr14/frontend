import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import './team.css';  // Make sure to create this CSS file

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const teamMembers = [
      {
        name: 'Anjani.Adapa',
        role: 'Tech Visionary & Lead Engineer',
        bio: 'Represents her leadership as Team Lead and her versatility as a Full Stack Developer.',
        contribution: 'Leads the team with strategic insights and oversees full-stack development to drive impactful solutions.',
        linkedIn: 'https://www.linkedin.com/in/anjani-naga-sai-satya-sri-adapa-520236223/',
        image: 'anju.jpg' // Add image path
      },
      {
        name: 'Bhavya.Mamidala',
        role: 'Backend Maestro',
        bio: 'Highlights her expertise in designing and managing robust backend architectures as a Senior Backend Developer.',
        contribution: 'Specializes in creating scalable and efficient backend systems.',
        linkedIn: 'https://www.linkedin.com/in/bhavya-mamidala-40125923b/',
        image: 'bhavya.jpg' // Add image path
      },
      {
        name: 'Abhinaya',
        role: 'Code Artisan',
        bio: 'Reflects her dedication and innovative touch as a Junior Backend Developer.',
        contribution: 'Brings fresh perspectives and creative solutions to backend development.',
        linkedIn: 'https://www.linkedin.com/in/abhinayasri-swarna-110b22254/',
        image: 'abhi.jpg' // Add image path
      },
      {
        name: 'Padma',
        role: 'UI Trailblazer',
        bio: 'Showcases her fresh perspective and creativity as a Junior Frontend Developer.',
        contribution: 'Focuses on crafting intuitive user interfaces with innovative design.',
        linkedIn: 'https://www.linkedin.com/in/padmanagasri-gundubogula/', // Add LinkedIn profile
        image: 'padma.jpg' // Add image path
      },
      {
        name: 'Akshay',
        role: 'Frontend Explorer',
        bio: 'Represents his enthusiasm and growing expertise as a Junior Frontend Developer.',
        contribution: 'Supports the team by implementing dynamic frontend features.',
        linkedIn: 'https://www.linkedin.com/in/sai-akshay-deepak-maradapudi-00bab5287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', // Add LinkedIn profile
        image: 'path_to_image.jpg' // Add image path
      },
      {
        name: 'Charishma',
        role: 'Frontend Architect',
        bio: 'Emphasizes her skill in crafting visually appealing and user-friendly interfaces as a Senior Frontend Developer.',
        contribution: 'Leads the design and implementation of polished, user-friendly interfaces.',
        linkedIn: 'https://www.linkedin.com/in/charishma-chikkala-5271b7229', // Add LinkedIn profile
        image: 'cherry.jpg' // Add image path
      },
      {
        name: 'Gunasekhar',
        role: 'NLP Solutions Strategist',
        bio: 'Highlights his expertise in creating cutting-edge NLP solutions as a Senior NLP Developer.',
        contribution: 'Drives the development of advanced NLP applications and models.',
        linkedIn: 'https://www.linkedin.com/in/venkata-gunasekhar-gorre',
        image: 'guna.jpg' // Add image path
      },
      {
        name: 'Pavan',
        role: 'Language Insight Innovator',
        bio: 'Reflects his ability to harness the power of NLP for groundbreaking applications as a Senior NLP Developer.',
        contribution: 'Excels in leveraging NLP techniques to derive meaningful insights from language data.',
        linkedIn: 'https://www.linkedin.com/in/pavankumar14182', // Add LinkedIn profile
        image: 'pavan.jpg' // Add image path
      }
    
  ];

  const handlePrevious = () => {
    setCurrentIndex(current =>
      current === 0 ? teamMembers.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(current =>
      current === teamMembers.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        OUR <span className="carousel-titlee">TEAM</span>
      </h2>
      
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {teamMembers.map((member, index) => {
            const position = index - currentIndex;
            const isActive = index === currentIndex;
            
            return (
              <div
                key={member.name}
                className={`member-card ${isActive ? 'active' : ''}`}
                style={{
                  transform: `translateX(${position * 100}%)`
                }}
              >
                <div className="member-image-wrapper">
                  <img
                    src={member.image} // Ensure image path is correct
                    alt={member.name}
                    className="member-image"
                  />
                </div>
                
                {isActive && (
                  <div className="member-info">
                    <div className="member-name-wrapper">
                      <h3 className="member-name">{member.name}</h3>
                      <a href={member.linkedIn} className="linkedin-link" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                    </div>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <button 
          className="nav-button nav-prev" 
          onClick={handlePrevious}
          aria-label="Previous member"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="nav-button nav-next" 
          onClick={handleNext}
          aria-label="Next member"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Team;
