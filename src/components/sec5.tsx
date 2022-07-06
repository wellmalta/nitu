import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";

export const Sec5 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col>
            <h2 className="text-center">Have a Look on our Blog</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              infinite={true}
              autoPlaySpeed={1000}
              transitionDuration={1500}
              centerMode={true}
            >
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card 4</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Card 5</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};
