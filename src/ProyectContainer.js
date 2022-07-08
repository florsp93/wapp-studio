import React from "react";
import Image from "react-bootstrap/Image";

const Proyects = [
  {
    imageUrl: "./imgs/finance-app.webp",
    title: "Prueba",
    tecnologies: "",
    gitHubUrl: "https://github.com/florsp93/finance-app",
  },
];

function ProyectContainer(proyect) {
  return (
    <div fluid className="ProyectContainer">
      <a href="https://www.canva.com/colors/color-palettes/pasture-of-dreams/">
        <Image className="proyectImage" rounded />
      </a>
      <h2 className="cardItems">{proyect.title}</h2>
      <p className="cardItems">
        Learn how to center an element vertically and horizontally with CSS.
      </p>
      <button className="gitHubLink cardItems">Git Hub Code</button>
    </div>
  );
}

export default ProyectContainer;
