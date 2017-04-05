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
            required
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
            required
            className='form-control'
            name='lastName'
            component='input'
            type='text'
            placeholder='Enter Last Name'
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={4}>Email</Label>
        <Col sm={8}>
          <Field
            required
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
            required
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
            required
            className='form-control'
            name='re-type-password'
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
