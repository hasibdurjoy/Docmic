import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Color } from "../Shared/Color/Color";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="mx-auto">
      <Row>
        <Col sm={12} md={6} lg={6}>
          <h1 style={{ fontSize: "60px" }}>
            Your <span style={{ color: `${Color.primary}` }}>Health</span> Is
            Our <br /> Top{" "}
            <span style={{ color: `${Color.secondary}` }}>Priority</span>
          </h1>
          <p className="mt-4">
            There are many variations of passages of lpsum available, but the
            majority hae suffered.
          </p>
          <Button
            className="mt-4"
            style={{ backgroundColor: `${Color.primary}`, width: "300px" }}
          >
            Go somewhere
          </Button>
          <div className="mt-4 d-flex gap-3 align-items-center justify-content-between">
            <div>
              <h1
                className="text-center"
                style={{ color: `${Color.secondary}` }}
              >
                100+
              </h1>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div>
              <h1
                className="text-center"
                style={{ color: `${Color.secondary}` }}
              >
                100+
              </h1>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div>
              <h1
                className="text-center"
                style={{ color: `${Color.secondary}` }}
              >
                100+
              </h1>
              <p>Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
        </Col>
        <Col
          sm={12}
          md={6}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div>
            <img
              src="https://i.ibb.co/4Vy7gZV/banner-Image.png"
              alt=""
              width="100%"
              className="px-3 pb-3"
            />
          </div>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;