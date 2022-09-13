import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ServicesData } from "../../FakeData/Services";
import { Color } from "../Shared/Color/Color";

const Services = () => {
  return (
    <Container>
      <h5 style={{ color: `${Color.secondary}` }} className="text-center">
        Our Services
      </h5>
      <h2 className="text-center">Services For Your Health</h2>
      <Row xs={1} sm={1} md={4} className="g-4 mt-4">
        {ServicesData.map((service) => (
          <Col key={service.id}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Card.Title>{service.name}</Card.Title>
                  <img
                    src={service.icon}
                    alt=""
                    height="30px"
                    width="30px"
                    style={{ marginTop: "-20px" }}
                  />
                </div>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="outline-secondary">Explore Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
