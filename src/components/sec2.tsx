import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const Sec2 = () => {
  return (
    <Container fluid style={{ minHeight: "50vh" }} className="d-flex">
      <Row className="w-100">
        <Col className="d-flex flex-column p-5 justify-content-center align-items-end">
          <h2>
            We Make it Perfect <br />
            for your Success.
          </h2>
          <Row>
            <Col>
              <h3>Giving Perfect Solution</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Make it Awesome.</h3>
            </Col>
          </Row>
        </Col>
        <Col
          className="p-5"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
          }}
        ></Col>
      </Row>
    </Container>
  );
};
