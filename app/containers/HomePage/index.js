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
} from 'reactstrap'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getForms } from './actions'
export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
                  return <tr>
                    <th scope="row">1</th>
                    <td><Link to={`/jotform/form/${item.id}`}>{item.name}</Link>
                    </td>
                    <td>21.12.2017</td>
                    <td>21.12.2017</td>
                  </tr>
                })
              }
              </tbody>
            </Table>
            <Button style={{float: 'right'}} color="success">Add new form</Button>{' '}
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
  getForms
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
