import React from "react";
import Container from "react-bootstrap/Container";

import { ProjectContainer } from "./components/project-container/project-container.component";
import AboutMe from "./components/about-me/about-me.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import Footer from "./components/footer/footer.component";

import { Projects } from "./projects";

const App = () => {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <div className="projectsTitleDiv">
        <h1 className="robotoMono projectsTitle tracking-in-expand">
          {"< Proyectos />"}
        </h1>
      </div>
      <Container fluid className="ProjectsCarrouselContainer">
        {Projects.map((project, i) => {
          console.log(project, i);
          return <ProjectContainer project={project} i={i} />;
        })}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
