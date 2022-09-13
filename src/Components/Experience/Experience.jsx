import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Color } from "../Shared/Color/Color";

const Experience = () => {
  {
    /* https://i.ibb.co/GF4KSV4/experience.png */
  }
  return (
    <Container className="pt-5">
      <Row>
        <Col md={7}>
          <p style={{ color: `${Color.secondary}` }}>16+ Years Experiences </p>
          <h3>We Are Always ensure Best Medical Treatment For Your Health</h3>
          <p>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look lik
          </p>
        </Col>
        <Col md={5} className="d-flex justify-content-lg-end">
          <img
            src="https://i.ibb.co/GF4KSV4/experience.png"
            alt=""
            width="80%"
            height="80%"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
