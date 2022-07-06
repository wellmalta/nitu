import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Sec3 = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">
            Services we are <br /> Offering
          </h2>
          <br />
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h3>Content Marketing</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col>
          <h3>Email Marketing</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col>
          <h3>Market Analysis</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h3>Web Development</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col>
          <h3>Keyboard Research</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col>
          <h3>Market Research</h3>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
    </Container>
  );
};
