import React from "react";
import  './Services.css'
import exam_img from '../../assets/exam_img.png'
import register_img from '../../assets/register_img.png'
import portfolio_img from '../../assets/portfolio_img.png'
const Services = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A sleek personal portfolio built with React and Vite to showcase my work and services.",
      image: portfolio_img,
      tech: ["React", "Vite", "CSS"],
      live: "https://react-first-task-thwi.vercel.app/",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Exam-Site",
      description:"A sleek online exam app with timed tests, instant scoring, and a fully responsive design.",
      image: exam_img,
      tech: ["Html", "Javascript", "CSS"],
      live: "https://examedge-seven.vercel.app/",
      github: "https://github.com/Darkvexor/examedge",
    },
    {
      title: "Registeration-Form",
      description: "A responsive 4-step registration form with progress tracking and instant input validation.",
      image: register_img,
      tech: ["React","CSS"],
      live: "https://registeration-form-phi.vercel.app/",
      github: "https://github.com/Darkvexor/React-first-task",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Latest Projects</h2>
      <p className="projects-subtitle">Some of my recent work</p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-stack">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services


