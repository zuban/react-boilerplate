import React, { Component } from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import Img from '../Img'
import { Link } from 'react-router'

import Logo from './LogoSquare.jpg'
class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <Navbar light toggleable>
        <NavbarToggler right onClick={this.toggle}/>
        <NavbarBrand href="/jotform/">
          <Img src={Logo} className='logo'/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="header-font">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="header-font">
                <span style={{
                  fontWeight: 'bold',
                  height: '25px',
                  lineHeight: '25px',
                  verticalAlign: 'middle'
                }}>EU</span>&nbsp;
                <a className="phonenummber">+49 (0)40 609461260</a>&nbsp;
                <span style={{
                  fontWeight: 'bold',
                  height: '25px',
                  lineHeight: '25px',
                  verticalAlign: 'middle'
                }}>US</span>&nbsp;
                <a className="phonenummber">+1 (310) 465-8797</a>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={'/jotform/login'}>
                  <i className="icon-user set icons-grey-light sm"/>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header
