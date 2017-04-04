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

import { login, signUp } from './actions'
import { Link } from 'react-router'
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

  // componentDidMount () {
  //   this.props.checkAuth();
  // }

  onSubmitSignUp (formArgs) {
    let newFormArgs = formArgs.set('roles', ['ROLE_PHOTOGRAPHER'])
    this.props.signUp(newFormArgs)
  }

  onSubmitLogin (formArgs) {
    console.log(formArgs)
    this.props.login(formArgs.get('login'), formArgs.get('password'))
  }

  render () {
    const {signupErrorMessage, signupSuccessMessage, loginErrorMessage} = this.props.loginState
    return (
      <div>
        <Helmet
          title="Login page"
          meta={[
            {name: 'login and signup pages', content: 'Login page'},
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
              <SignUpForm onSubmit={(formArgs) => this.onSubmitSignUp(formArgs)}/>
              {
                signupErrorMessage ? <FormGroup>
                  <Alert color='danger'>
                    {signupErrorMessage}
                  </Alert>
                </FormGroup> : null
              }
              {
                signupSuccessMessage ? <FormGroup>
                  <Alert color='success'>
                    {signupSuccessMessage}
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
              <LoginForm onSubmit={(formArgs) => this.onSubmitLogin(formArgs)}/>
              <Link to={'/jotform/forget-password'}>Forgot your password?</Link>
              {
                signupErrorMessage ? <FormGroup>
                  <Alert color='danger'>
                    {signupErrorMessage}
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
  signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
