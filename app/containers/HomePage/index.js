/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { makeSelectHome } from './selectors'
import { Link } from 'react-router'
import {
  Container,
  Row,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CreateNewForm from '../../components/CreateNewForm'
import { getForms, createFrom } from './actions'
export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  onSubmit (formArgs) {
    debugger
    this.props.createFrom(formArgs)
  }

  componentWillMount () {
    this.props.getForms()
  }

  render () {

    const {fetching, forms} = this.props.homeState
    return (
      <div>
        <Helmet
          title="Maground form"
          meta={[
            {
              name: 'Maground form',
              content: ''
            },
          ]}
        />
        <Container fluid>
          <Header
          />
          <Row className="layout-img-container">
          </Row>
          <Container className="jotform-container">
            <h2 className="headline">Heading Video Clip Submission Structure & Form</h2>

            <Table striped>
              <thead>
              <tr>
                <th>#</th>
                <th>Form name</th>
                <th>Time created</th>
                <th>Time updated</th>
              </tr>
              </thead>
              <tbody>
              {
                fetching ? 'Loading...' : forms.map(item => {
                  return <tr key={item.id}>
                    <th scope="row">-</th>
                    <td><Link to={`/jotform/form/${item.id}`}>{item.name}</Link>
                    </td>
                    <td>---</td>
                    <td>---</td>
                  </tr>
                })
              }
              </tbody>
            </Table>
            <Button
              style={{float: 'right'}}
              color="success"
              onClick={this.toggle}
            >Add new form</Button>{' '}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Create new form</ModalHeader>
              <ModalBody>
                <CreateNewForm onSubmit={(formArgs) => this.onSubmit(formArgs)}/>
              </ModalBody>
            </Modal>
          </Container>
        </Container>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  homeState: makeSelectHome(),
})

const mapDispatchToProps = {
  getForms,
  createFrom
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
