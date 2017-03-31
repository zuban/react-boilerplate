/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { makeSelectHome } from './selectors'

import {
  Container,
  Row,
  Col, Form, FormGroup, Label, Input, FormText,
  Button
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Img from '../../components/Img'

import JotFormImage  from './jotform.jpg'
import JotFormComponent from '../../components/JotForm'
import { Link } from 'react-router'
import { getTags, setTags, setText, addTag, getSVG } from './actions'
export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount () {
    this.props.getTags()
    this.props.getSVG()
  }

  onSubmit (props) {

    debugger
  }

  render () {
    const {selectedTags, svg, fetching} = this.props.homeState
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

const mapStateToProps = createStructuredSelector({
  homeState: makeSelectHome(),
})

const mapDispatchToProps = {
  getTags,
  setTags,
  setText,
  addTag,
  getSVG
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
