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
  Button,
  FormFeedback
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { download } from '../../helpers/downloadHelper'
import Img from '../../components/Img'
import JotFormImage  from './jotform.jpg'
import JotFormComponent from '../../components/JotForm'
import { getFormData, saveFormData, createPdf, setErrorMessage } from './actions'
import { Link } from 'react-router'

import { getFormObject, validateFields } from './formHelper'
export class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount () {
    this.props.getFormData(this.props.params.id)
  }

  generatePdf (props) {
    let obj = getFormObject(props.toJS())
    if (validateFields(obj)) {
      this.props.setErrorMessage('Please, fill out all mandatory fields')
    } else {
      this.props.saveFormData(obj)
      download('/video-submission-form/hook', obj)
    }
  }

  onSubmit (props) {
    let obj = getFormObject(props.toJS())
    if (validateFields(obj)) {
      this.props.setErrorMessage('Please, fill out all mandatory fields')
    } else {
      this.props.saveFormData(obj)
    }
  }

  render () {
    const {loading, formData, message, errorMessage} = this.props.jotForm
    let data = formData ? formData.formData : null

    debugger;
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
                <JotFormComponent initialValues={data}
                                  generatePdf={(props) => this.generatePdf(props)}
                                  onSubmit={(props) => this.onSubmit(props)}/>
                {message ? <FormFeedback style={{color: '#5cb85c', marginTop: '1rem'}}>{message}</FormFeedback> : null}
                {errorMessage ?
                  <FormFeedback style={{color: '#d9534f', marginTop: '1rem'}}>{errorMessage}</FormFeedback> : null}
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer/>
      </div>
    )
  }
}

Form
  .propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const
  mapStateToProps = createStructuredSelector({
    jotForm: makeSelectForm(),
  })

const
  mapDispatchToProps = {
    getFormData,
    saveFormData,
    createPdf,
    setErrorMessage,
  }

export default connect(mapStateToProps, mapDispatchToProps)(Form)
