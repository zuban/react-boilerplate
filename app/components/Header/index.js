import React, { Component } from 'react'
import { Link } from 'react-router'
import {
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div >
        <h3 style={{marginTop: 0, marginBottom: 0, lineHeight: '2.5rem'}} className='text-muted logo'>
          <Link to={'/'}>HW</Link>
        </h3>
      </div>

    )
  }
}

export default Header
