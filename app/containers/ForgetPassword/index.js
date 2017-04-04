/*
 *
 * ForgetPassword
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectForgetPassword from './selectors'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Container,
  Row,
  Col,
  Alert,
  FormGroup
} from 'reactstrap'
import ForgetPasswordForm from '../../components/ForgetPassword'
import { rememberPassword } from './actions'
export class ForgetPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onSubmit (formArgs) {
    this.props.rememberPassword(formArgs.get('login'))
  }

  render () {
    return (
      <div>
        <Helmet
          title="ForgetPassword"
          meta={[
            {name: 'description', content: 'Description of ForgetPassword'},
          ]}
        />
        <Container fluid>
          <Header
          />
          <Row className="layout-img-container">
          </Row>
          <Row
            style={{margin: '0 auto', marginTop: '50px', maxWidth: '400px'}}
            className="roboto">
            <Col
              style={{
                padding: '36px 40px 50px',
                backgroundColor: '#ededed'
              }}>

              <div
                style={{textAlign: 'center', marginBottom: '20px'}}>
                <h2
                  className="headline roboto-bold"
                >Forgot Password or Username?
                </h2>
                <span
                  className="mailto">
               There's no need to register all over again. Just fill in the fields below and you'll receive an email shortly with instructions.
              </span>
              </div>
              <ForgetPasswordForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
    )
  }
}

ForgetPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  ForgetPassword: makeSelectForgetPassword(),
})

const mapDispatchToProps = {
  rememberPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)
