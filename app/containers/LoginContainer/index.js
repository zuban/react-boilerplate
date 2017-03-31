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
          <Row style={{margin: '0 auto', maxWidth: '866px', marginTop: '50px'}}>
            <Col style={{padding: '35px 15px 43px 15px', background: '#ededed'}}>
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
