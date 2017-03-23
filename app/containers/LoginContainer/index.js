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

import LoginForm from '../../components/Login/LoginForm'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

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
        <Container style={{
          maxWidth: '400px',
          marginTop: '20px'
        }}>
          <Row>
            <Col>
              <LoginForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
            </Col>
            {
              this.props.loginState.errorMessage ? <FormGroup>
                <Alert color='danger'>
                  {this.props.loginState.errorMessage}
                </Alert>
              </FormGroup> : null
            }
          </Row>
        </Container>
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
