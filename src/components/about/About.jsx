import React from "react";
import "./about.css";
import ME from "../../assests/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20 Clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Innovative Front-End Developer with 1 years experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, JavaScript, Bootstrap, ReactJS plus modern libraries and frameworks. Passionate about usability, new technologies, bringing ideas to life, and working with dedicated teams to build efficient and robust applications suited to the user's needs. Organized and dependable candidate, successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
