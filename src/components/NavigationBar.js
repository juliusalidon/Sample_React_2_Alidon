// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const NavigationBar = () => {
    return (
        <>
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/contact">Contact Us</Link>
            </Nav.Link>
            <NavDropdown title="Hooks" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/classState">
                   Class Use State
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/functionalUseState">
                   Functional Use State
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/basicFormHandling">
                   Basic Form Handling
                </Link>
              </NavDropdown.Item>
            </NavDropdown>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default NavigationBar;