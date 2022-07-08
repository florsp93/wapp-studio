import React from "react";
import Container from "react-bootstrap/Container";
import ProyectContainer from "./ProyectContainer";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Image from "react-bootstrap/Image";

const Proyects = [
  {
    imageUrl: "finance-app.webp",
    title: "Finance App",
    tecnologies: "React | Bootstrap",
    pageUrl: "http://finance-app.wappstudio.com/",
    gitHubUrl: "https://github.com/florsp93/finance-app",
  },
  {
    imageUrl: "etiquetado-ventanas.webp",
    title: "Calificación Energética",
    tecnologies: "React | Bootstrap",
    pageUrl: "http://generador-etiquetas.wappstudio.com/",
    gitHubUrl: "https://github.com/florsp93/etiquetasApp",
  },
  {
    imageUrl: "health-app.webp",
    title: "Health App",
    tecnologies: "React | CSS",
    pageUrl: "http://health-app.wappstudio.com/",
    gitHubUrl: "https://github.com/florsp93/Task-2_health-app",
  },
  {
    imageUrl: "apc-page.webp",
    title: "APC Web",
    tecnologies: "HTML | CSS | Vanilla JavaScript",
    pageUrl: "http://apc-web.wappstudio.com/log-in.html",
    gitHubUrl: "https://github.com/florsp93/apc-web",
  },
];

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
      <Container fluid className="ProyectsCarrouselContainer ">
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
