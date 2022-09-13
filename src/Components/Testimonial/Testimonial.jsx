import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TestimonialData } from "../../FakeData/Testimonial";
import { Color } from "../Shared/Color/Color";
import Ornament from "./../../Images/Ornament.svg";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container className="py-4">
      <h5 className="text-center" style={{ color: Color.secondary }}>
        Testimonial
      </h5>
      <h1 className="text-center">What they say?</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform(ease-in-out)"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {TestimonialData.map((data) => {
          return (
            <div className="d-flex justify-content-center">
              <Card style={{ width: "70%" }}>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <Card.Title>{data.name}</Card.Title>
                      <p>{data.role}</p>
                      <Card.Text>{data.description}</Card.Text>
                      <img src={Ornament} alt="" />
                    </Col>
                    <Col md={4}>
                      <Card.Img variant="top" src={data.icon} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
