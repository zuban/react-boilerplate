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

const CreateNewForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label sm={4}>Form name</Label>
        <Col sm={8}>
          <Field
            className='form-control'
            name='name'
            component='input'
            type='text'
            placeholder='Enter form name'
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Button
          color="success"
          type='submit'
          disabled={pristine || submitting}>Create</Button>
      </FormGroup>
    </Form>
  )
}

const CreateNewFormWrapper = reduxForm({
  form: 'createNewFrom'
})
(CreateNewForm)

export default CreateNewFormWrapper
