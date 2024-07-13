import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src="./img/logo.png" alt="logo" width="150px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Startseite</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <NavDropdown title="Unsere Dessertsorten" id="basic-nav-dropdown" className='dropDown'>
              <NavDropdown.Item className='background' href="#action/3.1">Milchdesserts</NavDropdown.Item>
              <NavDropdown.Item className='background' href="#action/3.2">
              Schokoladenkuchen
              </NavDropdown.Item>
              <NavDropdown.Item className='background' href="#action/3.3">Obstkuchen</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='background' href="#action/3.4">
              Vegane Desserts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;