import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "rgb(78,91,230)"}} className="p-5 text-white">
      <Row>
        <Col lg="5" className="p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          mollitia quo rem a suscipit quaerat quibusdam perferendis recusandae
          in, dolorem quia deserunt non, nisi iste odit modi laudantium.
          Tenetur, culpa.
        </Col>
        <Col>
          <h4 style={{fontSize: "1.2rem"}}>Home</h4>
        </Col>
        <Col>
          <h4 style={{fontSize: "1.2rem"}}>Company</h4>
        </Col>
        <Col>
          <h4 style={{fontSize: "1.2rem"}}>Help</h4>
        </Col>
        <Col>
          <h4 style={{fontSize: "1.2rem"}}>Contact</h4>
        </Col>
      </Row>
    </Container>
  );
};
