/**
 *
 * TagModal
 *
 */

import React from 'react'
// import styled from 'styled-components';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css'

import ModalForm from './ModalForm'
import ClipLoader from 'halogen/ClipLoader'
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap'

class TagModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  saveModalData () {
    this.props.saveModalData().then(() => {
      this.props.toggle()
      this.props.getTags()
    })
  }

  onSubmit (props) {
    this.props.updateModalData(
      props.modalSelectedFiles.map((item) => item.value),
      props.modalTagName,
      props.modalTagDescription,
      props.modalUsers.map((item) => item.meta)
    )
    this.props.saveModalData().then(() => {
      this.props.toggle()
      this.props.getTags()
    })
  }

  onCancel () {
    this.props.toggle()
  }

  render () {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}>
        <ModalHeader
          toggle={this.toggle}>
          Edit tag {this.props.modalTagName}
        </ModalHeader>
        <ModalBody>
          { this.props.modalDataFetching
            ? <ClipLoader color='#2895F1'
                          size='12px'
                          margin='0 auto'/>
            : <ModalForm
              onSubmit={(props) => this.onSubmit(props)}
              onCancel={() => this.onCancel}
              modalTagName={this.props.modalTagName}
              modalTagDescription={this.props.modalTagDescription}
              modalSelectedFiles={this.props.modalSelectedFiles}
              modalFiles={this.props.modalFiles}
              modalUsers={this.props.modalUsers}/>
          }
        </ModalBody>
      </Modal>
    )
  }
}

TagModal.propTypes = {}

export default TagModal
