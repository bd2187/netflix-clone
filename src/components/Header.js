import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function Header () {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Netflix</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Action & Adventure</NavItem>
          <NavItem eventKey={2} href="#">Comedies</NavItem>
          <NavItem eventKey={2} href="#">Documentaries</NavItem>
          <NavItem eventKey={2} href="#">Dramas</NavItem>
          <NavItem eventKey={2} href="#">Horror Movies</NavItem>
          <NavItem eventKey={2} href="#">Romantic Movies</NavItem>
          <NavItem eventKey={2} href="#">Sci-Fi & Fantasy</NavItem>
          <NavItem eventKey={2} href="#">Thrillers</NavItem>
        </Nav>
        <Nav pullRight>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
