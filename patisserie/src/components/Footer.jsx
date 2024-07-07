import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" footer mt-5 p-4 text-center">
      <Container>
        <Row>
          {/* <Col md="4">
            <h5>Hakkımızda</h5>
            <p>
              Şirketiniz hakkında kısa bir bilgi.
            </p>
          </Col> */}
          <Col md="6">
            <h5>Contact uns</h5>
            <p>
              Email: aycakubra1@gmail.com <br />
              Phonenummer: +90 555 555 55 55
            </p>
          </Col>
          <Col md="6">
            <h5>Sozialen Medien</h5>
            <p>
              Facebook  | Twitter | Instagram
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <p className=" hak mt-3">
              &copy; {new Date().getFullYear()} Alle Rechte vorbehalten.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer