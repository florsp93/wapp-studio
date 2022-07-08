import React from "react";
import Container from "react-bootstrap/Container";

import AboutMe from "./components/about-me/about-me.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import Footer from "./components/footer/footer.component";
import Image from "react-bootstrap/Image";

import { Proyects } from "./proyects";

const App = () => {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <div className="proyectsTitleDiv">
        <h1 className="robotoMono proyectsTitle tracking-in-expand">
          {"< Proyectos />"}
        </h1>
      </div>
      <Container fluid className="ProyectsCarrouselContainer">
        {Proyects.map((proyect, i) => (
          <div fluid key={i} className="ProyectContainer fade-in">
            <a href={proyect.pageUrl} target="_blank" rel="noreferrer">
              <Image src={proyect.imageUrl} className="proyectImage " rounded />
            </a>
            <div className="cardItemsDiv">
              <h2 className="robotoMono" style={{ fontSize: "1.6em" }}>
                {proyect.title}
              </h2>
              <p style={{ fontSize: "0.9em", marginBottom: "10px" }}>
                {proyect.tecnologies}
              </p>
              <a
                className="gitHubLink robotoMono"
                href={proyect.gitHubUrl}
                target="_blank"
                rel="noreferrer"
              >
                Git Hub Code
              </a>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
