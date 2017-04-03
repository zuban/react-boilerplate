/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectLoginContainer from './selectors'

import { login } from './actions'

import LoginForm from '../../components/Login'
import SignUpForm from '../../components/SignUp'
import {
  Container,
  Row,
  Col,
  Alert,
  FormGroup
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmit (formArgs) {

    this.props.login(formArgs.email, formArgs.password)
  }

  render () {
    return (
      <div>
        <Helmet
          title="LoginContainer"
          meta={[
            {name: 'description', content: 'Description of LoginContainer'},
          ]}
        />
        <Container fluid>
          <Header
          />
          <Row className="layout-img-container">
          </Row>
          <Row
            style={{margin: '0 auto', marginTop: '50px'}}
            className="roboto">
            <Col
              sm={{size: 4, offset: 2}}
              style={{
                padding: '36px 40px 50px',
                backgroundColor: '#ededed'
              }}>
              <div
                style={{textAlign: 'center', marginBottom: '20px'}}>
                <h2
                  className="headline roboto-bold"
                >New at MAGROUND?</h2>
                <span
                  className="mailto">
                 Create a customer account for free of charge.
              </span>
              </div>
              <SignUpForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
              {
                this.props.loginState.errorMessage ? <FormGroup>
                  <Alert color='danger'>
                    {this.props.loginState.errorMessage}
                  </Alert>
                </FormGroup> : null
              }
            </Col>
            <Col sm={{size: 4}} style={{
              padding: '36px 40px 50px',
              background: '#e0e0e0'
            }}>
              <div style={{textAlign: 'center', marginBottom: '120px'}}>
                <h2 className="headline roboto-bold">You already have an account?</h2>
              </div>
              <LoginForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
              {
                this.props.loginState.errorMessage ? <FormGroup>
                  <Alert color='danger'>
                    {this.props.loginState.errorMessage}
                  </Alert>
                </FormGroup> : null
              }
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loginState: makeSelectLoginContainer(),
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
