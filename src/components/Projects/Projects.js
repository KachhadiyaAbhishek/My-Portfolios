import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Pharmacare from "../../Assets/Projects/Pharmacare.avif";
import RealEstate from "../../Assets/Projects/realestate.jpg";
import Hotel from "../../Assets/Projects/hotel.png";

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
              imgPath={RealEstate}
              title="HomeScape"
              description="HomeScape is a website which provides property`s details, property news and user can get filter wiseproperty`s. User can send message to agent by mail. also created different pages in frontend."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pharmacare}
              title="Pharmacare"
              description="Developed a comprehensive pharmacy website allowing users to purchase medicines and pharmacyproducts. And book doctor appointments, and schedule lab test. Integrated a secure payment system.In this website user can filter category wise product and medicines."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://pharmacare-react.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              title="Hotel Management System"
              description="Implemented two main roles: Admin and User. Admin: Full CRUD (Create, Read, Update, Delete) functionality for managing hotels, rooms. User: Ability to search, book, view, and cancel hotel bookings"
              ghLink="https://github.com/KachhadiyaAbhishek/Hotel-Booking-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
