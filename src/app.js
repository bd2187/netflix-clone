import React from 'react';
import { render } from 'react-dom';
import '../public/style/main.scss';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

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

function MainMovie () {
  return (
    <Jumbotron style={{height: "252px"}}>
      <h3>Netflix</h3>
      <h1>Movie Here</h1>
      <p>Watch now</p>
    </Jumbotron>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainMovie />
    </div>
  )
}

render(
  <App />,
  document.getElementById('app')
);
