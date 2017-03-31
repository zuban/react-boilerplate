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

const LoginForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Field
          className='form-control'
          name='email'
          component='input'
          type='email'
          placeholder='Your email'
        />
      </FormGroup>
      <FormGroup>
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
          Want to <Link to={'/singup'}>sign up?</Link>
        </FormText>
        <FormText color='muted'>
          <Link to={'/reset-password'}>Forget</Link> your password?
        </FormText>
      </FormGroup>
      <FormGroup>
        <Button type='submit' disabled={pristine || submitting}>Submit</Button>
      </FormGroup>
    </Form>
  )
}

const LoginFormWrapper = reduxForm({
  form: 'loginForm'
})
(LoginForm)

export default LoginFormWrapper
