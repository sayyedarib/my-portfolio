import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
Hello, I'm <span className="purple">Aarib</span>, and I'm a passionate learner and aspiring artificial intelligence engineer. I'm currently pursuing a Bachelor's degree in Technology in Artificial Intelligence from Aligarh Muslim University.
<br />
<br />
Throughout my academic and professional journey, I have developed a strong interest and proficiency in<span className="purple"> web development</span> technologies such as<span className="purple">  Next.js, MongoDB, React, and Node.js</span>. I have also gained experience working on local websites like<span className="purple"> <a style={{textDecoration:"none", color:"purple"}} href="www.amupedia.com">amupedia.com</a>  and <a  href="www.grabtern.com">grabtern.com </a> </span>, where I was able to hone my skills in collaboration, teamwork, and problem-solving.
<br /><br />
I believe that asking questions, seeking knowledge, and interacting with new people are essential for personal and professional growth. I am always eager to learn from others and collaborate on exciting projects.
<br /><br />
In my free time, I enjoy exploring new technologies, reading about the latest developments in artificial intelligence, and engaging in outdoor activities like hiking and cycling.

I am excited to continue my journey in the field of artificial intelligence, web development, software engineering and look forward to new challenges and opportunities to learn and grow.
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
