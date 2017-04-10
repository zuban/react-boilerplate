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
  Button
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Img from '../../components/Img'
import JotFormImage  from './jotform.jpg'
import JotFormComponent from '../../components/JotForm'
import { getFormData, saveFormData, createPdf } from './actions'
import { Link } from 'react-router'
export class Form extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount () {
    this.props.getFormData(this.props.params.id)
  }

  generatePdf (props) {
    let t = props.toJS()
    let obj = {}
    Object.keys(t).forEach(key => {
      if (key.startsWith('area')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('motionintheclip')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('cameradirection')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('weather')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('additionalfiles')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else {
        obj[key] = t[key]
      }
    })
    // this.props.createPdf(obj)

    let form = document.createElement('form')
    form.method = 'POST'
    form.action = '/jotform/hook'
    Object.keys(obj).forEach(key => {
      let element = document.createElement('input')
      element.value = obj[key]
      element.name = key
      form.appendChild(element)
    })
    document.body.appendChild(form)
    form.submit()
  }

  onSubmit (props) {
    let t = props.toJS()
    let obj = {}
    Object.keys(t).forEach(key => {
      if (key.startsWith('area')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('motionintheclip')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('cameradirection')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('weather')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else if (key.startsWith('additionalfiles')) {
        let tempKey = key.split(';')
        if (obj[tempKey[0]]) {
          obj[tempKey[0]] += ', ' + tempKey[1]
        } else {
          obj[tempKey[0]] = tempKey[1]
        }
      } else {
        obj[key] = t[key]
      }
    })
    this.props.saveFormData(obj)
  }

  render () {
    const {loading, formData} = this.props.jotForm
    let data = formData ? formData.formData : null
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
          <Button color="link"><Link to={'/jotform/'}>Back to list</Link></Button>
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
  jotForm: makeSelectForm(),
})

const mapDispatchToProps = {
  getFormData,
  saveFormData,
  createPdf,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
