import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUser, FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Bandage</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Shop" id="shop-dropdown">
              <NavDropdown.Item href="#">Shop 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Shop 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Pages</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#"><FaUser /> Login / Register</Nav.Link>
            <Nav.Link href="#"><FaSearch /></Nav.Link>
            <Nav.Link href="#"><FaShoppingCart /> 1</Nav.Link>
            <Nav.Link href="#"><FaHeart /> 1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
