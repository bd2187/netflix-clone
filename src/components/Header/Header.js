import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <NavLink to="/genre/Action & Adventure" activeStyle={{color: netflixRed}}>
          Action & Adventure
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
    this.resetValue = this.resetValue.bind(this);
  }
  handleChange(e) {
    this.props.history.replace(`/search/q=${e.target.value}`);
    this.props.search(e.target.value);
    this.setState({value: e.target.value});

    if (e.target.value === '') {
      this.props.history.replace(`/`);
    }
  }
  resetValue() {
    this.setState({value: ''})
  }
  render () {
    return (
      <div>
      <div className="mobileNavbar">
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" onClick={this.resetValue}>
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
      </div>


        <div className="desktopNavbar">
          <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" onClick={this.resetValue}>
                  <img className="logo" src={logo} />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={3} title="Browse" id="basic-nav-dropdown">
                  <NavOptions />
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <FormGroup>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  search: PropTypes.func.isRequired
}

export default Header;
