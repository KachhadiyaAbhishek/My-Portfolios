import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiDjango,
  
} from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiFlask,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node Js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Express Js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h5>Bootstrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <h5>Django</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <h5>Flask</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h5>Mongodb</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>Postgresql</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h5>Mysql</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
        <h5>Sqlite</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
