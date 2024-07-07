import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Order = () => {
  return (
   
    <Form className='form'>
    <h1 className='order'>Bestellen Sie</h1>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Geben Sie Ihre email ein." />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Passwort</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Adresse</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Aderesse 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Stadt</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Land</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Auswählen...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Plz</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Überprüfe mich" />
    </Form.Group>

    <Button variant="primary" type="submit" className='buton'>
      Submit
    </Button>
  </Form>
  )
}

export default Order