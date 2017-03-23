import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupButton,
  Button,
  Col,
  Row
} from 'reactstrap'
import { Link } from 'react-router'
import TagInput from '../TagInput'
class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div style={{paddingBottom: '1rem'}}>
        <nav style={{marginBottom: '1rem'}}>
          <Nav pills className='float-right'>
            <NavItem>
              <NavLink>
                <Link to={'/login'}>
                  <i className='fa fa-sign-out' aria-hidden='true'/>
                  Log out
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={'/upload'}>
                  <i className='fa fa-file-text-o' aria-hidden='true'/>
                  Upload svg
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </nav>
        <div>
          <Row>
            <Col sm={{size: 2}}>
              <h3 style={{marginTop: 0, marginBottom: 0, lineHeight: '2.5rem'}} className='text-muted logo'>
                <Link to={'/'}>Slink</Link>
              </h3>
            </Col>
            <Col sm={{size: 9, offset: 1}}>
              <InputGroup>
                <input
                  onChange={(e) => this.props.handleSearchText(e.target.value)}
                  type='text'
                  name='text'
                  className='form-control'
                  placeholder='Search by text...'
                />
                <InputGroupButton>
                  <Button color='secondary'>Search</Button>
                </InputGroupButton>
              </InputGroup>
              <InputGroup>
                <TagInput handleSearchTags={this.props.handleSearchTags}
                          tags={this.props.tags}
                          style={{width: '300px'}}/>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Header
