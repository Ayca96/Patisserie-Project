import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
// import {Button} from "react-bootstrap";
import veri from "../data";


//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir 

const MyCard = () => {
  console.log(veri);

  //!alttaki ilk return react ın ekrana bastırılan kısmı
  return (
    
    <Container className="container card-containers">
      <h1 className="menu" col-md-12 >Unser Menü</h1>
      <Row gap={5} className="g-5 d-flex justify-content-center text-center">
        {veri.map(({name,description,image,id,link,price}) => {
          return (
            <Col xs={12} md={6} lg={3} 
              className=" cards d-flex  justify-content-center"
              key={id}
            >
              <Card className="box" style={{width: "18rem" }}>
                <Card.Img className="img" variant="top" src={image}/>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button className="btns" variant="primary" href={link} target="_blank">Unsere geheimnisvollen Rezepte</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    
  );
}

export default MyCard;