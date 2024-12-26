import React, { useState, useEffect } from 'react';
import './home.css';
import Navbar from './navbar';
import About from './about';
import Team from './team';
import Roadmap from './roadmap';
import Footer from './footer';
const HomePage = () => {
  const [typedText, setTypedText] = useState(""); // State to manage the typed text

  // Animation effect for typing text
  useEffect(() => {
    const text = "We bring data insights with cutting-edge AI solutions, Unlocking Insights: Where Conversations Meet Intelligence";
    let index = 0;

    const typingEffect = () => {
      if (index < text.length) {
        // Update the typed text
        setTypedText((prev) => prev + text.charAt(index));
        index++;
      }
    };

    const interval = setInterval(() => {
      typingEffect();
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []); // Empty dependency array to run effect only once

  // Scroll to "about" section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("aboutt");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-container" id="home">
        <div className="left-side">
          <div className="matter">
            <h1>Welcome to</h1>
            <h2 className="highlight-text">DATA DIALECT</h2>
            <div className="animated-matter">
              {/* Display the typed text here */}
              <p>{typedText}</p>
            </div>
            <button className="know-more" onClick={scrollToAbout}>Know More</button>
          </div>
        </div>

        <div className="right-side">
          <img src="home.png" alt="Home" className="responsive-image" />
        </div>
      </div>
      <div className='down' id="aboutt">
        <About/>
      </div>
      <div>
        <Roadmap/>
      </div>
      <div className='down1' id='team'>
        <Team/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;
