import React, { useState } from "react";
import "./Project.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// ✅ Importing images from assets folder (adjust path as per your structure)
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";


const Project = () => {
  // ✅ Project data array
  const projectData = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack web app built using HTML, CSS, JavaScript, and MySQL. Features product browsing, cart, and payment simulation.",
      link: "#",
      image: project1,
    },
    {
      title: "Harvestify",
      description:
        "My Dream Car is a sleek React-based landing page showcasing a collection of stunning car models built using HTML, CSS, and JavaScript.",
      link: "#",
      image: project2,
    },
   
  ];

  // ✅ State and handlers for slider
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  // ✅ Render
  return (

    <div id="project">
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-slider">
        {/* Left arrow */}
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        {/* Mapping projects */}
        {projectData.map((project, index) => (
          <div
            key={index}
            className={index === current ? "project-card active" : "project-card"}
          >
            {index === current && (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Right arrow */}
        <button className="arrow-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </section></div>
  );
};

export default Project;