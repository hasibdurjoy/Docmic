import React, { useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaqData } from "../../FakeData/FaqData";
import { Color } from "../Shared/Color/Color";

const FAQ = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col md={5}>
          <p style={{ color: `${Color.secondary}` }}>FAQ Questions</p>
          <h3>Get Your General Answer </h3>
          <>
            {FaqData.map((data) => {
              return <QNA data={data} />;
            })}
          </>
        </Col>
        <Col md={5}>
          <img src="https://i.ibb.co/rkPqyLH/QNA.png " alt="" width="100%" />
        </Col>
      </Row>
    </Container>
  );
};
export const QNA = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="mt-3">
      <div
        className="mt-3 d-flex align-items-center justify-content-between fs-5"
        style={{ cursor: "pointer", fontWeight: "600" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <span>{data.question}</span>
        <span style={{ color: `${Color.primary}` }}>
          {showDetails ? "-" : "+"}
        </span>
      </div>
      <p className="mt-2">{showDetails ? data.answer : ""} </p>
    </div>
  );
};

export default FAQ;
