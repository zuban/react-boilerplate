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
} from 'reactstrap'
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form/immutable'

const SignUp = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Username</Label>
        <Field
          className='form-control'
          name='username'
          component='input'
          type='text'
          placeholder='Enter your username'
        />
      </FormGroup>
      <FormGroup>
        <Label >Email</Label>
        <Field
          className='form-control'
          name='email'
          component='input'
          type='email'
          placeholder='EnterYour email'
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Field
          className='form-control'
          name='password'
          component='input'
          type='password'
          placeholder='Your password'
        />
      </FormGroup>
      <FormGroup>
        <FormText color='muted'>
          Link to <Link to={'/login'}>login</Link>
        </FormText>
      </FormGroup>
      <FormGroup>
        <Button type='submit' disabled={pristine || submitting}>Submit</Button>
      </FormGroup>
    </Form>
  )
}

const SignUpWrapper = reduxForm({
  form: 'signupForm'
})
(SignUp)

export default SignUpWrapper
