import React from "react";
import Image from "react-bootstrap/Image";

import "./project-container.styles.css";

export const ProjectContainer = ({ project, i }) => (
  <div fluid key={i} className="ProjectContainer fade-in">
    <a href={project.pageUrl} target="_blank" rel="noreferrer">
      <Image src={project.imageUrl} className="projectImage " rounded />
    </a>
    <div className="cardItemsDiv">
      <h2 className="robotoMono" style={{ fontSize: "1.6em" }}>
        {project.title}
      </h2>
      <p style={{ fontSize: "0.9em", marginBottom: "10px" }}>
        {project.tecnologies}
      </p>
      <a
        className="gitHubLink robotoMono"
        href={project.gitHubUrl}
        target="_blank"
        rel="noreferrer"
      >
        Git Hub Code
      </a>
    </div>
  </div>
);
