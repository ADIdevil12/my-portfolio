import React from 'react';
import './About.css';
import profile2 from '../../assets/profile2.png';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile2} alt="Profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>Hey there! I’m a curious learner who loves to design, code, and create things that make a difference.</p>
            <p>From crafting responsive web pages to exploring AI-powered projects, I enjoy working on ideas that combine logic with creativity.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p><hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p><hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p><hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p><hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement1">
          <h1>Olabsthon Hackathon</h1>
          <p>2025 2nd Runner Up</p>
        </div>
      </div>
    </div>
  );
};

export default About;