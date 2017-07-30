import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../../public/img/netflix.svg';

function Header () {
  const netflixRed = "#B9090B";
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>



      <Navbar.Collapse>
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
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
