import Carousel from 'react-bootstrap/Carousel';
import resim1 from '../../src/image/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import resim2 from "../../src/image/katie-rosario-QNyRp21hb5I-unsplash.jpg";
import resim3 from "../../src/image/sebastian-coman-photography-dacM7egRw0Y-unsplash.jpg";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";


function MyCarousel() {
  return (
    <Container>
    <Row className="g-4 text-center">
    <Carousel className='mb-5'>
      <Carousel.Item>
       <img src={resim3} alt="" className='d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>Unsere Kuchen wurden mit Liebe gemacht.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={resim2} alt="" className='d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>Unsere Kuchen wurden mit Liebe gemacht.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={resim1} alt="" className='d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>
          Unsere Kuchen wurden mit Liebe gemacht.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Row>
    </Container>
  );
}

export default MyCarousel;