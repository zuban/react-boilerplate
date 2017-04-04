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
import { getFormData, saveFormData } from './actions'

export class Form extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount () {
    this.props.getFormData(this.props.params.id)
  }

  onSubmit (props) {
    // let fileObj = {
    //   area: 'Rural, Desert, Mountain',
    //   audio: 'No',
    //   cameradirection: 'Front, Normal hight',
    //   chipsize: 'RED 5K - Weapon/EPIC&Scarlet DRAGON - 25.58x13.49mm',
    //   cityregion: 'Los Angeles',
    //   contry: 'United States',
    //   duration: '26',
    //   email: 'us@maground.com',
    //   focallength: '22mm',
    //   generaldiscription: 'driving down a desert road as the sun sets',
    //   height: '140',
    //   keywords: 'L0, USA, US, America, Amerika, California, L1, Autobahn, Straße, Pflaster, Verkehr, Bahnen, Sonnenuntergang, Sonnenaufgang, blauer Himmel, Berge, Abenteuer, Reisen, L2, freeway, road, pavement, highway, traffic, lanes, sunset, sunrise, blue sky, mountains, adventure, travel, L3, Autoroute, route, trottoir, trafic, ruelles, coucher du soleil, lever de soleil, ciel bleu, montagnes, aventure, voyage, L4, Autopista, carretera, pavimento, tráfico, carriles, puesta del sol, salida del sol, cielo azul, montañas, aventura, viaje, L5, 高速公路, 路, 路面, 公路, 交通, 车道, 日落, 日出, 蓝色的天空, 山, 冒险, 旅行',
    //   masteredTo: 'ProRes 422HQ',
    //   motionintheclip: 'Tracking Shot, Chase',
    //   ratio: '0:1',
    //   recordingcodec: 'REDcode',
    //   recordingframerate: '60.0',
    //   renderoremotion: 'for CGI-Render',
    //   resolution: '4K',
    //   specific: 'Driving',
    //   specificinfo: 'freeway, road, pavement, highway, traffic, lanes, sunset',
    //   timeofday: 'Dusk',
    //   weather: 'Sun',
    //   width: '250',
    //   yourgiven11: 'Roberto Hegeler HKR',
    // }
    //
    // if (fileObj.area) {
    //   let area = fileObj.area.split(', ')
    //   delete fileObj.area
    //   area.forEach(item => {
    //     let name = `area;${item}`
    //     fileObj[name] = true
    //   })
    // }
    //
    // if (fileObj.motionintheclip) {
    //   let motionintheclip = fileObj.motionintheclip.split(', ')
    //   delete fileObj.motionintheclip
    //   motionintheclip.forEach(item => {
    //     let name = `motionintheclip;${item}`
    //     fileObj[name] = true
    //   })
    // }
    //
    // if (fileObj.cameradirection) {
    //   let cameradirection = fileObj.cameradirection.split(', ')
    //   delete fileObj.cameradirection
    //   cameradirection.forEach(item => {
    //     let name = `cameradirection;${item}`
    //     fileObj[name] = true
    //   })
    // }
    //
    // if (fileObj.weather) {
    //   let weather = fileObj.weather.split(', ')
    //   delete fileObj.weather
    //   weather.forEach(item => {
    //     let name = `weather;${item}`
    //     fileObj[name] = true
    //   })
    // }
    //
    // if (fileObj.additionalfiles) {
    //   let additionalfiles = fileObj.additionalfiles.split(', ')
    //   delete fileObj.additionalfiles
    //   additionalfiles.forEach(item => {
    //     let name = `additionalfiles;${item}`
    //     fileObj[name] = true
    //   })
    // }
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
    debugger
    this.props.saveFormData(obj)
  }

  render () {
    const {loading, formData} = this.props.jotForm
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
  jotForm: makeSelectForm(),
})

const mapDispatchToProps = {
  getFormData,
  saveFormData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
