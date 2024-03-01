import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import projectsData from "../components/ProjectsData";
import { HashLink } from "react-router-hash-link";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectPath } = useParams();
  const project = projectsData.find((p) => p.path === projectPath);
  const techList = project.technologies ? project.technologies.join(" | ") : "";

  if (!project) {
    return <Navigate to="/" />;
  }

  const handleDemoProjects = () => {
    window.open(project.demo, "_blank");
  };

  const handleCodeProjects = () => {
    window.open(project.code, "_blank");
  };

  const projectImageStyle = `
    .project-detail-container .project-image::before {
      content: '';
      background-image: url(${project.imgUrl});
      opacity: 0.5;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  `;

  return (
    <div className="project-detail-container">
      <div className="project-image">
        <img src={project.imgUrl} alt={project.title} />
      </div>
      <div className="project-info">
        <h1>{project.title}</h1>
        <p>{techList}</p>
        <div className="project-description mt-5">{project.description}</div>
        <div className="project-buttons">
          <button className="demo-btn mt-3" onClick={handleDemoProjects}>
            <span> DEMO </span>
          </button>
          <button className="code-btn mt-3" onClick={handleCodeProjects}>
            <span> CODE </span>
          </button>
        </div>

        <div className="backLink mt-5">
          {/* <button className="back-btn">
            <span> */}
          <HashLink to="/#home" className="backLinkStyle">
            BACK TO HOME
          </HashLink>
          {/* </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
