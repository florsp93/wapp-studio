import React from "react";
import Container from "react-bootstrap/Container";

const AboutMe = () => {
  return (
    <Container fluid className="AboutMeContainer">
      <div className="titleBox"></div>
      <div className="presentationText ">
        <p className="fade-in-right">
          Hola! Soy Flor, Desarrolladora Frontend en crecimiento.
          <br />
          <br />
          Conocí la programación a fines del 2018, y desde entonces no deje de
          capacitarme y aprender cosas nuevas.
          <br />
          Desde el comienzo utilicé librerías de JavaScript para desarrollar
          aplicaciones web, y finalmente terminé eligiendo React para todos mis
          proyectos.
          <br />
          <br />
          En el 2020 ingresé en la Tecnicatura de Programación Informática en la
          UNSAM, y hace más de un año que trabajo como Desarrolladora Web en una
          empresa de Software. Mi prioridad es entregar un producto de calidad,
          sin detalles dejados al azar, para eso mi metodología de trabajo
          principal es la organización y el orden. Me encanta adquirir nuevas
          técnicas y conocimientos, como así también colaborar con los demás,
          por eso disfruto mucho trabajando en equipo.
          <br />
          <br />
          Soy partidaria de que cualquier tecnología o conocimiento puede
          adquirirse, pero las ganas de aprender, crecer y mejorar son
          inherentes.
        </p>
        <a
          href={"https://www.linkedin.com/in/florencia-spina"}
          target="_blank"
          rel="noreferrer"
          type="input"
          className="linkedInButton robotoMono fade-in"
        >
          LinkedIn
        </a>
      </div>
    </Container>
  );
};

export default AboutMe;
