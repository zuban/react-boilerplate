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

const LoginForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label sm={4}>Email</Label>
        <Col sm={8}>
          <Field
            required
            className='form-control'
            name='login'
            component='input'
            type='email'
            placeholder='Your email'
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
            placeholder='Your password'
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button
          color="success"
          type='submit'
          disabled={pristine || submitting}>Login</Button>
      </FormGroup>
    </Form>
  )
}

const LoginFormWrapper = reduxForm({
  form: 'loginForm'
})
(LoginForm)

export default LoginFormWrapper
