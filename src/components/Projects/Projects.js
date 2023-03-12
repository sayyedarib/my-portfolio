import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import donorLink from "../../Assets/Projects/donorLink.jpg";
import textUtils from "../../Assets/Projects/textUtils.jpg";
import simonGame from "../../Assets/Projects/simonGame.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={donorLink}
              isBlog={false}
              title="DonorLink"
              description=" (backend has not been deployed yet so demo won't work properly) Unified platform of donation where volunteer can join us and people can donate food and cloth. Instant email will be sent to the nearest volunteer "
              ghLink="https://github.com/sayyedarib/Donation"
              demoLink="https://donation-frontend-olive.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtils}
              isBlog={false}
              title="Text-Utils"
              description="A static webpage made by using react. Just write or paste the text and count number of words, reading time, convert lower to uppercase, uppercase to lowercase"
              ghLink="https://github.com/sayyedarib/TextUtils"
              demoLink="https://text-utils-eight-gilt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonGame}
              isBlog={false}
              title="Simon Game"
              description="A simple game made by using javascript. Try to memorize the pattern"
              ghLink="https://github.com/sayyedarib/Simon-Game"
              demoLink="https://sayyedarib.github.io/Simon-Game/"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
