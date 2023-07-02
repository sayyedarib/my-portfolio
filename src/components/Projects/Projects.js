import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import donorLink from "../../Assets/Projects/donorLink.png";
import grabtern from "../../Assets/Projects/grabtern.png";
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
              description="Unified platform of donation where volunteer can join us and people can donate cloth and register themselves as blood donor. Volunteer can manage donations from dashboard "
              ghLink="https://github.com/sayyedarib/Donation"
              demoLink="https://donorlink-frontend-.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grabtern}
              isBlog={false}
              title="Grabtern"
              description="A platfrom that connects senior students having cracked good internship with juniors to guide them"
              ghLink="https://github.com/anmode/grabtern-frontend"
              demoLink="https://www.grabtern.com/"
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
