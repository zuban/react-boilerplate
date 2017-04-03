/*
 *
 * Form
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectForm from './selectors'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Img from '../../components/Img'
import JotFormImage  from './jotform.jpg'
import JotFormComponent from '../../components/JotForm'

export class Form extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onSubmit (props) {
    debugger
  }

  render () {
    return (
      <div>
        <Helmet
          title="Maground form"
          meta={[
            {
              name: 'Maground form',
              content: ''
            },
          ]}
        />
        <Container fluid>
          <Header
          />
          <Row className="layout-img-container">
          </Row>
          <Container className="jotform-container">
            <h2 className="headline">Heading Video Clip Submission Structure & Form</h2>
            <Row className="jotform-row" style={{margin: '0 auto'}}>
              <Col sm="6">
                <span className="mailto">
                  Complete & place this form within the clip folder of each submitted video file. If the information across several clips is same, copy & paste the downloaded PDF accordingly. The "Hero" clip and all it's files must have the A_Prefix.
                </span>
              </Col>
              <Col sm="6">
                <Img className="jotform-image" src={JotFormImage}/>
              </Col>
            </Row>
            <Row className="jotform-row" style={{margin: '0 auto'}}>
              <Col>
                <JotFormComponent onSubmit={(props) => this.onSubmit(props)}/>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer/>
      </div>
    )
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  Form: makeSelectForm(),
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
