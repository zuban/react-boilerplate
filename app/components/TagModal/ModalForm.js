/**
 * Created by sergeyzubov on 17/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {
  Form,
  FormGroup,
  Label,
  Button,
} from 'reactstrap'

import FormSelect from './FormSelect'
import Users from './Users'

let ModalForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    modalSelectedFiles,
    modalFiles,
    selectedUsers
  } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Label</Label>
        <Field
          className='form-control'
          name='modalTagName'
          component='input'
          type='text'
          placeholder='Edit label'/>
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Field
          className='form-control'
          name='modalTagDescription'
          component='input'
          type='textarea'
          placeholder='Edit description'/>
      </FormGroup>
      <FormGroup>
        <Label>Select Documents</Label>
        <Field
          name='modalSelectedFiles'
          options={modalFiles}
          component={FormSelect}
        />
      </FormGroup>
      <FormGroup>
        <Label>Select Users</Label>
        <Field
          name='modalUsers'
          component={Users}
        />
      </FormGroup>
      <FormGroup>
        <Button
          color='primary'
          type='submit'
          disabled={pristine || submitting}>Save</Button>{' '}
        <Button
          color='secondary'
          onClick={reset}>Cancel</Button>
      </FormGroup>
    </Form>
  )
}

ModalForm = reduxForm({
  form: 'modalForm'
})(ModalForm)

// You have to connect() to any reducers that you wish to connect to yourself
ModalForm = connect(
  (state, props) => ({
    initialValues: {
      modalTagName: props.modalTagName,
      modalTagDescription: props.modalTagDescription,
      modalSelectedFiles: props.modalSelectedFiles,
      modalUsers: props.modalUsers,
    }
  })           // bind account loading action creator
)(ModalForm)

export default ModalForm
