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

const ForgetPassword = (props) => {
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
            className='form-control'
            name='login'
            component='input'
            type='email'
            placeholder='Your email'
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button
          color="success"
          type='submit'
          disabled={pristine || submitting}>Submit</Button>
      </FormGroup>
    </Form>
  )
}

const ForgetPasswordWrapper = reduxForm({
  form: 'forgetPassword'
})
(ForgetPassword)

export default ForgetPasswordWrapper
