import React, { Component } from 'react';
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

function NavOptions () {
  const netflixRed = "#B9090B";
  return (
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
  )
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.history.replace(`/search/q=${e.target.value}`);
    this.props.search(e.target.value);
    this.setState({value: e.target.value});

    if (e.target.value === '') {
      this.props.history.replace(`/`);
    }
  }
  render () {
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
            <FormControl
              type="text"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </FormGroup>
          <NavOptions />
          <Nav pullRight>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
