import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
  return (
    <section id="people" className="py-5 ">
      <div className="text-dark text-center mb-5">
        <em>Konditoreien</em>
        <h1>Unser Team</h1>
      </div>
      <Container>
        <Row className="py-5 row-gap-3 justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <Card.Img variant="top" src={require('../image/our-team-2.jpg')} alt="Aragorn" />
              <Card.Body>
                <Card.Title>Hans</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Leiter</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <Card.Img variant="top" src={require('../image/our-team-3.jpg')} alt="Arondir" />
              <Card.Body>
                <Card.Title>Isabella</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Konditorin</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
