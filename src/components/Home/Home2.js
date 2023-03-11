import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
    <p className="home-about-body">
      Hey there, I'm Sayyed Aarib Hussain, currently pursuing my Bachelor's in Technology in Artificial Intelligence at Aligarh Muslim University. My love for programming led me to learn several languages, including <i><b className="purple">C++, JavaScript, and Python</b></i>.
      <br />
      <br />
      I'm particularly interested in <i><b className="purple">web technologies and products</b></i>, as well as areas related to <i><b className="purple">deep learning and natural language processing</b></i>. Whenever possible, I put my passion for developing products into practice using <i><b className="purple">Node.js</b></i>, and modern JavaScript libraries and frameworks such as <i><b className="purple">React.js and Next.js</b></i>.
      <br />
      <br />
      Recently, I had the opportunity to work on two local websites, Amupedia.com and Grabtern.com. While my contributions were limited, I gained invaluable experience in teamwork and asking questions to learn and grow.
    </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img style={{ height: "250px", width: "auto" }} src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sayyedarib"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sayyed-arib-hussain-1220b5187/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sayyedarib4321/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
