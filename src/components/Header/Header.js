import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header () {
  const netflixRed = "#B9090B";
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Netflix</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>



      <Navbar.Collapse>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{color: netflixRed}}>
              Home
            </NavLink>
            <NavLink to="/genre/Comedies" activeStyle={{color: netflixRed}}>
              Comedies
            </NavLink>
            <NavLink to="/genre/Documentaries" activeStyle={{color: netflixRed}}>
              Documentaries
            </NavLink>
            <NavLink to="/genre/Dramas" activeStyle={{color: netflixRed}}>
              Dramas
            </NavLink>
            <NavLink to="/genre/Horror" activeStyle={{color: netflixRed}}>
              Horror
            </NavLink>
            <NavLink to="/genre/Romance" activeStyle={{color: netflixRed}}>
              Romance
            </NavLink>
            <NavLink to="/genre/Sci-Fi" activeStyle={{color: netflixRed}}>
              Sci-Fi
            </NavLink>
            <NavLink to="/genre/Thrillers" activeStyle={{color: netflixRed}}>
              Thrillers
            </NavLink>
          </li>
        </ul>
        <Nav pullRight>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;



// <Navbar.Collapse>
//   <Nav>
//     <NavItem eventKey={1} href="/">
//       <Link to="/">Home</Link>
//     </NavItem>
//     <NavItem eventKey={2} href="#">
//       <Link to="/genre/Comedies">Comedies</Link>
//     </NavItem>
//     <NavItem eventKey={2} href="#">Documentaries</NavItem>
//     <NavItem eventKey={2} href="#">Dramas</NavItem>
//     <NavItem eventKey={2} href="#">Horror Movies</NavItem>
//     <NavItem eventKey={2} href="#">Romantic Movies</NavItem>
//     <NavItem eventKey={2} href="#">Sci-Fi & Fantasy</NavItem>
//     <NavItem eventKey={2} href="#">Thrillers</NavItem>
//   </Nav>
//   <Nav pullRight>
//   </Nav>
// </Navbar.Collapse>
