/**
 * Created by sergeyzubov on 20/03/2017.
 */
import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  FormText,
  Col,
} from 'reactstrap'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form/immutable'

const SignUpForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label sm={4}>First Name</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='firstName'
            component='input'
            type='text'
            placeholder='Enter First Name'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Last Name</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='lastName'
            component='input'
            type='text'
            placeholder='Enter Last Name'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Company</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='company'
            component='input'
            type='text'
            placeholder='Your Company'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Your Position</Label>
        <Col sm={8}>
          <Field name="jobTitle" className="form-control" component='select'>
            <option value=""></option>
            <option value="Designer">Designer</option>
            <option value="Art Director">Art Director</option>
            <option value="Creative Director">Creative Director</option>
            <option value="Postproduction">Postproduction</option>
            <option value="CG-Operator">CG-Operator</option>
            <option value="Photographer">Photographer</option>
            <option value="Account Director">Account Director</option>
            <option value="Manager">Manager</option>
            <option value="Boss">Boss</option>
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Please Choose Country</Label>
        <Col sm={8}>
          <Field name="countryId" className="form-control" component='select'>
            <option value=""></option>
            <option value="3">Argentina</option>
            <option value="4">Australia</option>
            <option value="32">Austria</option>
            <option value="5">Belgium</option>
            <option value="6">Brasil</option>
            <option value="1">Bulgaria</option>
            <option value="21">Canada</option>
            <option value="8">China</option>
            <option value="22">Croatia</option>
            <option value="7">Cyprus</option>
            <option value="44">Czech Republic</option>
            <option value="9">Denmark</option>
            <option value="2">Egypt</option>
            <option value="49">Estonia</option>
            <option value="11">Finland</option>
            <option value="12">France</option>
            <option value="10">Germany</option>
            <option value="13">Great Britain</option>
            <option value="50">Greece</option>
            <option value="14">Hongkong</option>
            <option value="51">Hungary</option>
            <option value="15">India</option>
            <option value="16">Indonesia</option>
            <option value="17">Ireland</option>
            <option value="18">Italy</option>
            <option value="19">Jamaica</option>
            <option value="20">Japan</option>
            <option value="52">Latvia</option>
            <option value="53">Lithuania</option>
            <option value="23">Luxembourg</option>
            <option value="24">Macau</option>
            <option value="25">Malaysia</option>
            <option value="54">Malta</option>
            <option value="26">Marocco</option>
            <option value="27">Mexico</option>
            <option value="28">Monaco</option>
            <option value="30">Netherlands</option>
            <option value="29">New Zealand</option>
            <option value="31">Norway</option>
            <option value="33">Poland</option>
            <option value="34">Portugal</option>
            <option value="55">Romania</option>
            <option value="35">Russia</option>
            <option value="36">Saudi-Arabia</option>
            <option value="39">Singapore</option>
            <option value="40">Slovakia</option>
            <option value="41">Slovenia</option>
            <option value="42">Spain</option>
            <option value="37">Sweden</option>
            <option value="38">Switzerland</option>
            <option value="43">Thailand</option>
            <option value="45">Tunesia</option>
            <option value="46">Turkey</option>
            <option value="47">USA</option>
            <option value="48">...other territories</option>
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Email</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='email'
            component='input'
            type='email'
            placeholder='Enter Your Email'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Password</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='password'
            component='input'
            type='password'
            placeholder='Your Password'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Re-type Password</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='password'
            component='input'
            type='password'
            placeholder='Re-type Your Password'
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button color="success" type='submit' disabled={pristine || submitting}>Submit</Button>
      </FormGroup>
    </Form>
  )
}

const SignUpFormWrapper = reduxForm({
  form: 'signUpFrom'
})
(SignUpForm)

export default SignUpFormWrapper
