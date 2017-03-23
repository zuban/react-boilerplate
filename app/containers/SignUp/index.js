/*
 *
 * SignUp
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectSignUp from './selectors'

import SignUpForm from '../../components/SignUpForm'
import {
  Container,
  Row,
  Col,
  FormGroup,
  Alert
} from 'reactstrap'

import { signup } from './actions'

export class SignUp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmit (formArgs) {

    this.props.signup(formArgs.username, formArgs.email, formArgs.password)
  }

  render () {

    console.log(this.props.signUpState)
    return (
      <div>
        <Helmet
          title="SignUp"
          meta={[
            {name: 'description', content: 'Description of SignUp'},
          ]}
        />
        <Container style={{
          maxWidth: '400px',
          marginTop: '20px'
        }}>
          <Row>
            <Col>
              <SignUpForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
              {
                this.props.signUpState.errorMessage ? <FormGroup>
                  <Alert color='danger'>
                    {this.props.signUpState.errorMessage}
                  </Alert>
                </FormGroup> : null
              }
              {
                this.props.signUpState.successMessage ? <FormGroup>
                  <Alert color='success'>
                    {this.props.signUpState.successMessage}
                  </Alert>
                </FormGroup> : null
              }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  signUpState: makeSelectSignUp(),
})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
