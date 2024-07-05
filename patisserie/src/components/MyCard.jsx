import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data";

console.log(data);

function MyCard() {
  return(
    <div>
     {data.map(({id,name,description,price,image})=>{
    return (
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary"><a href=""></a> Tarif</Button>
      </Card.Body>
    </Card>
  );
  })}
  </div>
  )
 
}

export default MyCard;