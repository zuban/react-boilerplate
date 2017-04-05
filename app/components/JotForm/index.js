/**
 * Created by sergeyzubov on 20/03/2017.
 */
import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormText
} from 'reactstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form/immutable'
import { fromJS } from 'immutable'

let JotForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    fields,
    generatePdf
  } = props
  return (
    <div>
      <Form style={{marginTop: '50px'}} onSubmit={handleSubmit}>
        <FormGroup row>
          <Label sm={2}>First name</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='firstName'
              component='input'
              type='text'
              placeholder='First name'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Last Name</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='lastName'
              component='input'
              type='text'
              placeholder='Last name'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>
            Email</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='email'
              component='input'
              type='email'
              placeholder='Email'
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>
            MAGROUND Shortcut</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='yourgiven11'
              component='input'
              type='text'
              placeholder='MAGROUND Shortcut'
            />
            <FormText color="muted">
              May come in handy when creating a lot of forms to sort into the sets.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>
            Your given Set/Clip Name (optional)</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='clipName'
              component='input'
              type='text'
              placeholder='May come in handy when creating a lot of forms to sort into the sets'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Select if clip is:</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Field name="renderoremotion" className="form-check-label" component='input' type="radio"
                       value="for CGI-Render"/>
                for CGI-Render
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="renderoremotion" className="form-check-label" component='input' type="radio"
                       value="for Storytelling, emotion"/>
                for Storytelling, emotion
              </Label>
            </FormGroup>
            <FormText color="muted">
              If the clip is designed design for adding a 3D object, then more information is required.
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Specific</Label>

          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Driving"/>
                Driving
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Drone"/>
                Drone
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Timelapse"/>
                Timelapse
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Aerial"/>
                Aerial
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="360Video"/>
                360Video
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio"
                       value="Motion Timelapse"/>
                Motion Timelapse
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Underwater"/>
                Underwater
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio"
                       value="ReflectVideos"/>
                ReflectVideos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="specific" className="form-check-label" component='input' type="radio" value="Stop Motion"/>
                Stop Motion
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Please Select 360Video for full spherical videos, and "ReflectVideos" if they are several clips, like 5
              Go-Pros mounted to a rigged car.
              Create one continuous clip out of all clips with a one second black timeline between clips.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Recording Framerate</Label>
          <Col sm={10}>
            <Field name="recordingframerate" className="form-control" component='select'>
              <option value=""></option>
              <option value="23.976"> 23.976</option>
              <option value="24"> 24</option>
              <option value="25"> 25</option>
              <option value="30"> 30</option>
              <option value="48"> 48</option>
              <option value="50"> 50</option>
              <option value="50i"> 50i</option>
              <option value="60"> 60</option>
              <option value="60i"> 60i</option>
              <option value="72"> 72</option>
              <option value="90"> 90</option>
              <option value="100"> 100</option>
              <option value="119.88"> 119.88</option>
              <option value="120"> 120</option>
              <option value="144"> 144</option>
              <option value="240"> 240</option>
              <option value="300"> 300</option>
              <option value="400"> 400</option>
              <option value="500"> 500</option>
              <option value="800"> 800</option>
              <option value="1000"> 1000</option>
            </Field>
            <FormText color="muted">
              Recording Framerate may be 60fps for slow-motion and project Framerate is 30fps to have slow-motion
              effect.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Focal Length</Label>
          <Col sm={10}>
            <Field name="focallength" className="form-control" component='select'>
              <option value=""></option>
              <option value="10mm"> 10mm</option>
              <option value="12mm"> 12mm</option>
              <option value="14mm"> 14mm</option>
              <option value="18mm"> 18mm</option>
              <option value="20mm"> 20mm</option>
              <option value="22mm"> 22mm</option>
              <option value="24mm"> 24mm</option>
              <option value="28mm"> 28mm</option>
              <option value="35mm"> 35mm</option>
              <option value="40mm"> 40mm</option>
              <option value="50mm"> 50mm</option>
              <option value="85mm"> 85mm</option>
              <option value="100mm"> 100mm</option>
              <option value="135mm"> 135mm</option>
              <option value="150mm"> 150mm</option>
              <option value="200mm"> 200mm</option>
              <option value="250mm"> 250mm</option>
              <option value="300mm"> 300mm</option>
              <option value="350mm"> 350mm</option>
              <option value="500mm"> 500mm</option>
            </Field>
            <FormText color="muted">
              The actual recorded focal-length. Especially important when shot with a zoom-lens
            </FormText>

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>
            Lens used</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='lensused'
              component='input'
              type='text'
              placeholder='Lens brand and model as: Brand Model Focal length/F-stop'
            />
            <FormText color="muted">
              i.e.: Zeiss CZ.2 18-35mm/T2.9
            </FormText>

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Chip Size </Label>
          <Col sm={10}>
            <Field name="chipsize" className="form-control" component='select'>
              <option value=""></option>
              <option value="GoPro 2K ; 04.57x03.43mm"> GoPro 2K ; 04.57x03.43mm</option>
              <option value="CMOS 1/2.3&quot;: 6.17 x 4.55mm"> CMOS 1/2.3": 6.17 x 4.55mm</option>
              <option value="CMOS 1&quot;: 13.2 x 8.8mm"> CMOS 1": 13.2 x 8.8mm</option>
              <option value="Micro 4/3 ; 17.30x13.00mm  "> Micro 4/3 ; 17.30x13.00mm</option>
              <option value="Foveon ; 20.70x13.80mm"> Foveon ; 20.70x13.80mm</option>
              <option value="APS-C Canon ; 22.20x14.80mm"> APS-C Canon ; 22.20x14.80mm</option>
              <option value="APS-C ; 23.60x15.70mm"> APS-C ; 23.60x15.70mm</option>
              <option value="APS-H Canon ; 27.90x18.60mm"> APS-H Canon ; 27.90x18.60mm</option>
              <option value="APS-H ; 28.70x19.00mm"> APS-H ; 28.70x19.00mm</option>
              <option value="Full Frame 35mm ; 36.00x24.00mm"> Full Frame 35mm ; 36.00x24.00mm</option>
              <option value="Arri Alexa Mini ; 26.40x14.85mm"> Arri Alexa Mini ; 26.40x14.85mm</option>
              <option value="Arri Alexa ; 23.76x13x37mm"> Arri Alexa ; 23.76x13x37mm</option>
              <option value="Arri Amira ; 28.17x18.13mm"> Arri Amira ; 28.17x18.13mm</option>
              <option value="Canon C100/C200/C300 ; 24.60x 13.80mm"> Canon C100/C200/C300 ; 24.60x 13.80mm</option>
              <option value="Canon C500 ; 26.21x13.82mm"> Canon C500 ; 26.21x13.82mm</option>
              <option value="RED 4K - Any ; 20.47x10.79mm "> RED 4K - Any ; 20.47x10.79mm</option>
              <option value="RED 5K - Any ; 25.58x13.49mm"> RED 5K - Any ; 25.58x13.49mm</option>
              <option value="RED 6K - Any ; 30.70x15.80mm"> RED 6K - Any ; 30.70x15.80mm</option>
              <option value="RED 8K - Weapon ; 40.96x21.6mm"> RED 8K - Weapon ; 40.96x21.6mm</option>
              <option value="RED 4K - Epic/ Scarlet ; 22.12x11.66mm"> RED 4K - Epic/ Scarlet ; 22.12x11.66mm</option>
              <option value="RED 5K - Epic/ Scarlet ; 27.65x14.58mm"> RED 5K - Epic/ Scarlet ; 27.65x14.58mm</option>
              <option value="Sony FS7/FS5/FS100/VG30/VG20 ; 23.60x13.30mm"> Sony FS7/FS5/FS100/VG30/VG20 ; 23.60x13.30mm
              </option>
              <option value="Sony F65/F55/F5 ; 24.89x14.00mm"> Sony F65/F55/F5 ; 24.89x14.00mm</option>
              <option value="Sony a7/VG900 (in FF mode ); 35.80x20.10mm"> Sony a7/VG900 (in FF mode ); 35.80x20.10mm
              </option>
              <option value="Blackmagic 4K ; 22.00x11.88mm"> Blackmagic 4K ; 22.00x11.88mm</option>
              <option value="Blackmagic 4.6K ; 25.34x14.25mm"> Blackmagic 4.6K ; 25.34x14.25mm</option>
              <option value="Blackmagic Production 4K ; 21.12x11.88mm"> Blackmagic Production 4K ; 21.12x11.88mm
              </option>
              <option value="Blackmagic Cinema ; 15.81x08.88mm"> Blackmagic Cinema ; 15.81x08.88mm</option>
              <option value="Blackmagic-Studio/Micro Studio 4K ; 13.06x07.35mm"> Blackmagic-Studio/Micro Studio 4K ;
                13.06x07.35mm
              </option>
              <option value="Blackmagic Micro 2K ; 12.48x7.02mm"> Blackmagic Micro 2K ; 12.48x7.02mm</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Recording Codec</Label>
          <Col sm={10}>
            <Field name="recordingcodec" className="form-control" component='select'>
              <option value=""></option>
              <option value="H.264"> H.264</option>
              <option value="H.265"> H.265</option>
              <option value="XAVC"> XAVC</option>
              <option value="AVCHD"> AVCHD</option>
              <option value="RED-Raw"> RED-Raw</option>
              <option value="Sony sLog2"> Sony sLog2</option>
              <option value="Sony sLog3"> Sony sLog3</option>
              <option value="ProRes 422 (HQ)"> ProRes 422 (HQ)</option>
              <option value="ProRes 4444 (XQ)"> ProRes 4444 (XQ)</option>
              <option value="ProRes 4444"> ProRes 4444</option>
              <option value="MPEG-2 Long GOP (Canon XF codec)"> MPEG-2 Long GOP (Canon XF codec)</option>
              <option value="AVC-Intra"> AVC-Intra</option>
              <option value="RAW"> RAW</option>
            </Field>
            <FormText color="muted">
              The original recording codec if differs from the delivered format "ProRes 422 (HQ)". And if original
              recording stores more information then "ProRes 422 (HQ)" for delivery on demand. Or Log gamma settings.
              All
              only if applicable.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Mastered to </Label>
          <Col sm={10}>
            <Field name="masteredto" className="form-control" component='select'>
              <option value=""></option>
              <option value="H.264"> H.264</option>
              <option value="MPEG2"> MPEG2</option>
              <option value="MPEG4"> MPEG4</option>
              <option value="QuickTime ProRes 422"> QuickTime ProRes 422</option>
              <option value="QuickTime ProRes 422HQ"> QuickTime ProRes 422HQ</option>
              <option value="QuickTIme ProRes 444"> QuickTIme ProRes 444</option>
            </Field>
            <FormText color="muted">
              The original recording codec if differs from the delivered format "ProRes 422 (HQ)". And if original
              recording
              stores more information then "ProRes 422 (HQ)" for delivery on demand. Or Log gamma settings. All only if
              applicable.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Resolution</Label>
          <Col sm={10}>
            <Field name="resolution" className="form-control" component='select'>
              <option value=""></option>
              <option value="8K "> 8K</option>
              <option value="6K"> 6K</option>
              <option value="5K"> 5K</option>
              <option value="4K "> 4K</option>
              <option value="4K UHD"> 4K UHD</option>
              <option value="2K"> 2K</option>
              <option value="1080p FULL HD"> 1080p FULL HD</option>
              <option value="720p  HD"> 720p HD</option>
            </Field>
            <FormText color="muted">
              The original recording codec if differs from the delivered format "ProRes 422 (HQ)". And if original
              recording
              stores more information then "ProRes 422 (HQ)" for delivery on demand. Or Log gamma settings. All only if
              applicable.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Audio</Label>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Field name="audio" className="form-check-label" component='input' type="radio" value="Yes"/>
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="audio" className="form-check-label" component='input' type="radio" value="No"/>
                No
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Motion in the Clip (Multiple Choice)</Label>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Slide" component="input" type="checkbox" className="form-check-input"/>
                Slide
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Push -in, -out" component="input" type="checkbox"
                       className="form-check-input"/>
                Push -in, -out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Still" component="input" type="checkbox" className="form-check-input"/>
                Still
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Chase" component="input" type="checkbox" className="form-check-input"/>
                Chase
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Slowmotion" component="input" type="checkbox"
                       className="form-check-input"/>
                Slowmotion
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Jib" component="input" type="checkbox" className="form-check-input"/>
                Jib
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Tracking Shot" component="input" type="checkbox"
                       className="form-check-input"/>
                Tracking Shot
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Tilt" component="input" type="checkbox" className="form-check-input"/>
                Tilt
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Follow" component="input" type="checkbox" className="form-check-input"/>
                Follow
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Flying" component="input" type="checkbox" className="form-check-input"/>
                Flying
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Zoom -in -out" component="input" type="checkbox"
                       className="form-check-input"/>
                Zoom -in -out
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Timelapse" component="input" type="checkbox" className="form-check-input"/>
                Timelapse
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="motionintheclip;Motion timelapse" component="input" type="checkbox"
                       className="form-check-input"/>
                Motion timelapse
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Type of camera-movements in set. When driving related to the car, when on location, movement of the
              camera.
              Multiple options possible: driving, follow/chase, pan
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Camera Direction (Multiple Choice)</Label>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;3/4" component="input" type="checkbox" className="form-check-input"/>
                3/4
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;Low angle" component="input" type="checkbox" className="form-check-input"/>
                Low angle
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;Top-Shot" component="input" type="checkbox" className="form-check-input"/>
                Top-Shot
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;Front" component="input" type="checkbox" className="form-check-input"/>
                Front
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;Normal hight" component="input" type="checkbox"
                       className="form-check-input"/>
                Normal hight
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;2/3" component="input" type="checkbox"
                       className="form-check-input"/>
                2/3
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;Profile" component="input" type="checkbox" className="form-check-input"/>
                Profile
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="cameradirection;High angle" component="input" type="checkbox"
                       className="form-check-input"/>
                High angle
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Direction the camera is facing the car. 3/4, front, profile, top, low, high... multiple options are
              possible:
              3/4, low
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Time of Day </Label>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Day"/>
                Day
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>

                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Midnight"/>
                Midnight
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Night"/>
                Night
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Dusk"/>
                Dusk
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Noon"/>
                Noon
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="timeofday" className="form-check-label" component='input' type="radio" value="Dawn"/>
                Dawn
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Weather (multiple choice) </Label>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="weather;Sun" component="input" type="checkbox" className="form-check-input"/>
                Sun
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;Rain" component="input" type="checkbox" className="form-check-input"/>
                Rain
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;Wind" component="input" type="checkbox" className="form-check-input"/>
                Wind
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="weather;Clouds" component="input" type="checkbox" className="form-check-input"/>
                Clouds
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;Snow" component="input" type="checkbox" className="form-check-input"/>
                Snow
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;Storm" component="input" type="checkbox" className="form-check-input"/>
                Storm
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="weather;Fog" component="input" type="checkbox" className="form-check-input"/>
                Fog
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;Overcast" component="input" type="checkbox" className="form-check-input"/>
                Overcast
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="weather;N/A" component="input" type="checkbox" className="form-check-input"/>
                N/A
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Select multiple if applicable
            </FormText>
          </Col>

        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Country</Label>
          <Col sm={10}>
            <Field name="contry" className="form-control" component='select'>
              <option value=""></option>
              <option value="United States"> United States</option>
              <option value="Canada"> Canada</option>
              <option value="United Kingdom"> United Kingdom</option>
              <option value="Germany"> Germany</option>
              <option value="France"> France</option>
              <option value="Spain"> Spain</option>
              <option value="Italy"> Italy</option>
              <option value="China"> China</option>
              <option value="Afghanistan"> Afghanistan</option>
              <option value="Albania"> Albania</option>
              <option value="Algeria"> Algeria</option>
              <option value="Andorra"> Andorra</option>
              <option value="Angola"> Angola</option>
              <option value="Antigua &amp; Deps"> Antigua &amp; Deps</option>
              <option value="Argentina"> Argentina</option>
              <option value="Armenia"> Armenia</option>
              <option value="Australia"> Australia</option>
              <option value="Austria"> Austria</option>
              <option value="Azerbaijan"> Azerbaijan</option>
              <option value="Bahamas"> Bahamas</option>
              <option value="Bahrain"> Bahrain</option>
              <option value="Bangladesh"> Bangladesh</option>
              <option value="Barbados"> Barbados</option>
              <option value="Belarus"> Belarus</option>
              <option value="Belgium"> Belgium</option>
              <option value="Belize"> Belize</option>
              <option value="Benin"> Benin</option>
              <option value="Bhutan"> Bhutan</option>
              <option value="Bolivia"> Bolivia</option>
              <option value="Bosnia Herzegovina"> Bosnia Herzegovina</option>
              <option value="Botswana"> Botswana</option>
              <option value="Brazil"> Brazil</option>
              <option value="Brunei"> Brunei</option>
              <option value="Bulgaria"> Bulgaria</option>
              <option value="Burkina"> Burkina</option>
              <option value="Burundi"> Burundi</option>
              <option value="Cambodia"> Cambodia</option>
              <option value="Cameroon"> Cameroon</option>
              <option value="Cape Verde"> Cape Verde</option>
              <option value="Central African Rep"> Central African Rep</option>
              <option value="Chad"> Chad</option>
              <option value="Chile"> Chile</option>
              <option value="Colombia"> Colombia</option>
              <option value="Comoros"> Comoros</option>
              <option value="Congo"> Congo</option>
              <option value="Congo {Democratic Rep}"> Congo (Democratic Rep)</option>
              <option value="Costa Rica"> Costa Rica</option>
              <option value="Croatia"> Croatia</option>
              <option value="Cuba"> Cuba</option>
              <option value="Cyprus"> Cyprus</option>
              <option value="Czech Republic"> Czech Republic</option>
              <option value="Denmark"> Denmark</option>
              <option value="Djibouti"> Djibouti</option>
              <option value="Dominica"> Dominica</option>
              <option value="Dominican Republic"> Dominican Republic</option>
              <option value="East Timor"> East Timor</option>
              <option value="Ecuador"> Ecuador</option>
              <option value="Egypt"> Egypt</option>
              <option value="El Salvador"> El Salvador</option>
              <option value="Equatorial Guinea"> Equatorial Guinea</option>
              <option value="Eritrea"> Eritrea</option>
              <option value="Estonia"> Estonia</option>
              <option value="Ethiopia"> Ethiopia</option>
              <option value="Fiji"> Fiji</option>
              <option value="Finland"> Finland</option>
              <option value="Gabon"> Gabon</option>
              <option value="Gambia"> Gambia</option>
              <option value="Georgia"> Georgia</option>
              <option value="Ghana"> Ghana</option>
              <option value="Greece"> Greece</option>
              <option value="Grenada"> Grenada</option>
              <option value="Guatemala"> Guatemala</option>
              <option value="Guinea"> Guinea</option>
              <option value="Guinea-Bissau"> Guinea-Bissau</option>
              <option value="Guyana"> Guyana</option>
              <option value="Haiti"> Haiti</option>
              <option value="Honduras"> Honduras</option>
              <option value="Hungary"> Hungary</option>
              <option value="Iceland"> Iceland</option>
              <option value="India"> India</option>
              <option value="Indonesia"> Indonesia</option>
              <option value="Iran"> Iran</option>
              <option value="Iraq"> Iraq</option>
              <option value="Ireland {Republic}"> Ireland Republic</option>
              <option value="Israel"> Israel</option>
              <option value="Ivory Coast"> Ivory Coast</option>
              <option value="Jamaica"> Jamaica</option>
              <option value="Japan"> Japan</option>
              <option value="Jordan"> Jordan</option>
              <option value="Kazakhstan"> Kazakhstan</option>
              <option value="Kenya"> Kenya</option>
              <option value="Kiribati"> Kiribati</option>
              <option value="Korea North"> Korea North</option>
              <option value="Korea South"> Korea South</option>
              <option value="Kosovo"> Kosovo</option>
              <option value="Kuwait"> Kuwait</option>
              <option value="Kyrgyzstan"> Kyrgyzstan</option>
              <option value="Laos"> Laos</option>
              <option value="Latvia"> Latvia</option>
              <option value="Lebanon"> Lebanon</option>
              <option value="Lesotho"> Lesotho</option>
              <option value="Liberia"> Liberia</option>
              <option value="Libya"> Libya</option>
              <option value="Liechtenstein"> Liechtenstein</option>
              <option value="Lithuania"> Lithuania</option>
              <option value="Luxembourg"> Luxembourg</option>
              <option value="Macedonia"> Macedonia</option>
              <option value="Madagascar"> Madagascar</option>
              <option value="Malawi"> Malawi</option>
              <option value="Malaysia"> Malaysia</option>
              <option value="Maldives"> Maldives</option>
              <option value="Mali"> Mali</option>
              <option value="Malta"> Malta</option>
              <option value="Marshall Islands"> Marshall Islands</option>
              <option value="Mauritania"> Mauritania</option>
              <option value="Mauritius"> Mauritius</option>
              <option value="Mexico"> Mexico</option>
              <option value="Micronesia"> Micronesia</option>
              <option value="Moldova"> Moldova</option>
              <option value="Monaco"> Monaco</option>
              <option value="Mongolia"> Mongolia</option>
              <option value="Montenegro"> Montenegro</option>
              <option value="Morocco"> Morocco</option>
              <option value="Mozambique"> Mozambique</option>
              <option value="Myanmar, {Burma}"> Myanmar, Burma</option>
              <option value="Namibia"> Namibia</option>
              <option value="Nauru"> Nauru</option>
              <option value="Nepal"> Nepal</option>
              <option value="Netherlands"> Netherlands</option>
              <option value="New Zealand"> New Zealand</option>
              <option value="Nicaragua"> Nicaragua</option>
              <option value="Niger"> Niger</option>
              <option value="Nigeria"> Nigeria</option>
              <option value="Norway"> Norway</option>
              <option value="Oman"> Oman</option>
              <option value="Pakistan"> Pakistan</option>
              <option value="Palau"> Palau</option>
              <option value="Panama"> Panama</option>
              <option value="Papua New Guinea"> Papua New Guinea</option>
              <option value="Paraguay"> Paraguay</option>
              <option value="Peru"> Peru</option>
              <option value="Philippines"> Philippines</option>
              <option value="Poland"> Poland</option>
              <option value="Portugal"> Portugal</option>
              <option value="Qatar"> Qatar</option>
              <option value="Romania"> Romania</option>
              <option value="Russian Federation"> Russian Federation</option>
              <option value="Rwanda"> Rwanda</option>
              <option value="St Kitts &amp; Nevis"> St Kitts &amp; Nevis</option>
              <option value="St Lucia"> St Lucia</option>
              <option value="Saint Vincent &amp; the Grenadines"> Saint Vincent &amp; the Grenadines</option>
              <option value="Samoa"> Samoa</option>
              <option value="San Marino"> San Marino</option>
              <option value="Sao Tome &amp; Principe"> Sao Tome &amp; Principe</option>
              <option value="Saudi Arabia"> Saudi Arabia</option>
              <option value="Senegal"> Senegal</option>
              <option value="Serbia"> Serbia</option>
              <option value="Seychelles"> Seychelles</option>
              <option value="Sierra Leone"> Sierra Leone</option>
              <option value="Singapore"> Singapore</option>
              <option value="Slovakia"> Slovakia</option>
              <option value="Slovenia"> Slovenia</option>
              <option value="Solomon Islands"> Solomon Islands</option>
              <option value="Somalia"> Somalia</option>
              <option value="South Africa"> South Africa</option>
              <option value="South Sudan"> South Sudan</option>
              <option value="Sri Lanka"> Sri Lanka</option>
              <option value="Sudan"> Sudan</option>
              <option value="Suriname"> Suriname</option>
              <option value="Swaziland"> Swaziland</option>
              <option value="Sweden"> Sweden</option>
              <option value="Switzerland"> Switzerland</option>
              <option value="Syria"> Syria</option>
              <option value="Taiwan"> Taiwan</option>
              <option value="Tajikistan"> Tajikistan</option>
              <option value="Tanzania"> Tanzania</option>
              <option value="Thailand"> Thailand</option>
              <option value="Togo"> Togo</option>
              <option value="Tonga"> Tonga</option>
              <option value="Trinidad &amp; Tobago"> Trinidad &amp; Tobago</option>
              <option value="Tunisia"> Tunisia</option>
              <option value="Turkey"> Turkey</option>
              <option value="Turkmenistan"> Turkmenistan</option>
              <option value="Tuvalu"> Tuvalu</option>
              <option value="Uganda"> Uganda</option>
              <option value="Ukraine"> Ukraine</option>
              <option value="United Arab Emirates"> United Arab Emirates</option>
              <option value="Uruguay"> Uruguay</option>
              <option value="Uzbekistan"> Uzbekistan</option>
              <option value="Vanuatu"> Vanuatu</option>
              <option value="Vatican City"> Vatican City</option>
              <option value="Venezuela"> Venezuela</option>
              <option value="Vietnam"> Vietnam</option>
              <option value="Yemen"> Yemen</option>
              <option value="Zambia"> Zambia</option>
              <option value="Zimbabwe"> Zimbabwe</option>
            </Field>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>City / Region</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='cityregion'
              component='input'
              type='text'
              placeholder='City / Region'
            />
            <FormText color="muted">
              Please use correct spelling
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Area (multiple choice) </Label>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="area;Downtown" component="input" type="checkbox" className="form-check-input"/>
                Downtown
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Field name="area;Landscape" component="input" type="checkbox" className="form-check-input"/>
                Landscape
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Field name="area;Coastal" component="input" type="checkbox" className="form-check-input"/>
                Coastal
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="area;City" component="input" type="checkbox" className="form-check-input"/>
                City
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="area;Rural" component="input" type="checkbox" className="form-check-input"/>
                Rural
              </Label>

            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="area;Desert" component="input" type="checkbox" className="form-check-input"/>
                Desert
              </Label>
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup check>
              <Label check>
                <Field name="area;Urban" component="input" type="checkbox" className="form-check-input"/>
                Urban
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="area;Sub-Urban" component="input" type="checkbox" className="form-check-input"/>
                Sub-Urban
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="area;Mountain" component="input" type="checkbox" className="form-check-input"/>
                Mountain
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Select multiple if applicable
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Additional Files (multiple choice)</Label>
          <Col sm={5}>
            <FormGroup check>
              <Label check>
                <Field name="additionalfiles;HDR Dome" component="input" type="checkbox" className="form-check-input"/>
                HDR Dome
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="additionalfiles;360° Video" component="input" type="checkbox"
                       className="form-check-input"/>
                360° Video
              </Label>
            </FormGroup>
          </Col>
          <Col sm={5}>
            <FormGroup check>
              <Label check>
                <Field name="additionalfiles;360° Panorama" component="input" type="checkbox"
                       className="form-check-input"/>
                360° Panorama
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field name="additionalfiles;Tracking Data" component="input" type="checkbox"
                       className="form-check-input"/>
                Tracking Data
              </Label>
            </FormGroup>
          </Col>
          <Col sm={{size: 'auto', offset: 2}}>
            <FormText color="muted">
              Select multiple if applicable
            </FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Video-Set specific information</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='specificinfo'
              component='textarea'
              type='text'
              placeholder='Clip Specific Information. Examples: Road, tarmac, mountain, ocean, river, tree, gravel, house, villa, modern, futuristic, light, high-rise, bush, grass....'
            />
            <FormText color="muted">
              Use only singularly words; mountain, not mountains
              Separate words with a comma ","
              i.e.:
              road, coast, mountain, high rise
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>General Description of the scenery</Label>
          <Col sm={10}>
            <Field
              className='form-control'
              name='generaldiscription'
              component='textarea'
              type='text'
              placeholder='Short description of the clip - scenery and action. Ex.: Coastal parking-lot  with a cloudy sky and mountains visible in the background. Trees are moving in the wind, rain in falling.'
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button
            color='primary'
            name="submit" value="submit"
            disabled={pristine || submitting}>Save</Button>{' '}
        </FormGroup>

      </Form>
      <Button
        color='primary'
        onClick={
          handleSubmit(data => {
            generatePdf(data)
          })}
      >Generate pdf</Button>{' '}
    </div>
  )
}

JotForm = reduxForm({
  form: 'jotForm',
  enableReinitialize: true // this is needed!!
})
(JotForm)

export default JotForm
