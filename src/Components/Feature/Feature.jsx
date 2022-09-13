import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FeatureData } from "../../FakeData/FeatureData";
import { Color } from "../Shared/Color/Color";

const Feature = () => {
  return (
    <Container>
      <Row>
        <Col sm={0} md={5} className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/YbJXWNQ/featured.png"
            alt=""
            width="80%"
            height="80%"
          />
        </Col>
        <Col sm={12} md={7}>
          <h5 style={{ color: `${Color.secondary}` }}>Our Hospital Feature</h5>
          <h1>Make An Appointment Easy And Fast Services </h1>
          <Row xs={1} sm={12} md={2} className="g-4">
            {FeatureData.map((data) => (
              <Col key={data.id}>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Card.Title>{data.name}</Card.Title>
                      <img src={data.icon} alt="" height="40px" width="40px" />
                    </div>
                    <Card.Text>{data.des}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
