import Carousel from 'react-bootstrap/Carousel';
import resim1 from '../../src/image/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import resim2 from "../../src/image/katie-rosario-QNyRp21hb5I-unsplash.jpg";
import resim3 from "../../src/image/sebastian-coman-photography-dacM7egRw0Y-unsplash.jpg";


function MyCarousel() {
  return (
   
    <Carousel className='carousel mb-5'>
      <Carousel.Item>
       <img src={resim3} alt="" className='images d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>Unsere Kuchen wurden mit Liebe gemacht.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src={resim2} alt="" className=' images d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>Unsere Kuchen wurden mit Liebe gemacht.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={resim1} alt="" className=' images d-block w-100' carousel/>
        <Carousel.Caption>
          <h3>Herzlich Wilkommen Ayca's Patisserie</h3>
          <p>
          Unsere Kuchen wurden mit Liebe gemacht.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
  );
}

export default MyCarousel;