import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import './styles/BSHeader.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><FontAwesomeIcon icon={faUsers} /> Applycation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Jobs" id="basic-nav-dropdown">
              <NavDropdown.Item href="/roles">View jobs</NavDropdown.Item>
              <NavDropdown.Item href="/roles">Post a jobs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Candidates" id="basic-nav-dropdown">
              <NavDropdown.Item href="/candidates">View candidates</NavDropdown.Item>
              <NavDropdown.Item href="/candidates">Add a candidate</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;