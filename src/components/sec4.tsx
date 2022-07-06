import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Sec4 = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "rgb(78,91,230)", height: "50vh" }}
      className="d-flex flex-column align-items-center justify-content-center text-white p-5"
    >
      <Row>
        <Col className="text-center">
          <h2>What are you waiting for?</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,{" "}
            <br />
            labore. Sequi provident voluptatibus, quidem illo odio ullam magni{" "}
            <br />
            quis deleniti.
          </p>
        </Col>
      </Row>
      <Row>
          <Col>
          <Button variant="light">Light</Button> <Button variant="link">Link</Button>
          </Col>
      </Row>
    </Container>
  );
};
