import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const Sec1 = () => {
  return (
    <Container fluid style={{backgroundColor: "rgb(250,248,245)"}}>
      <Row>
        <Col className="d-flex flex-column p-5">
          <ListGroup
            as="ol"
            numbered
            className="d-flex flex-column align-items-end"
          >
            <ListGroup.Item as="li">Market Research</ListGroup.Item>
            <ListGroup.Item as="li">Keyward Marketing</ListGroup.Item>
            <ListGroup.Item as="li">Email Marketing</ListGroup.Item>
            <ListGroup.Item as="li">Easy Solution</ListGroup.Item>
            <ListGroup.Item as="li">Easy Solution</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="d-flex justify-content-start align-items-center p-5">
          <h2>
            We're the Engineers <br />
            of Your Website.
          </h2>
        </Col>
      </Row>
    </Container>
  );
};
