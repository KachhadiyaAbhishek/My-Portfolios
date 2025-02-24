import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Kachhadiya </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />
            I am currently pursuing my bachelor's degree in computer science from LJ Institute of Engineering and Techonology. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />{" "} Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />{" "} Reading
            </li>
            <li className="about-activity">
              <ImPointRight />{" "} Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
