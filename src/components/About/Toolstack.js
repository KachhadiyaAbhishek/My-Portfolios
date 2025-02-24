import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNotepadplusplus,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Vs code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus />
        <h5>Notpade++</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5>GitHub</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
