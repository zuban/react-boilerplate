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

import {
  Container,
  Row,
  Col,
  Card, CardTitle, CardText, CardImg, CardImgOverlay, CardColumns,
  Button
} from 'reactstrap'

import ClipLoader from 'halogen/ClipLoader'
import Header from '../../components/Header'
import Tags from './Tags'
import { Link } from 'react-router'
import { getTags, setTags, setText, addTag, getSVG } from './actions'
export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount () {
    this.props.getTags()
    this.props.getSVG()
  }

  render () {
    const {selectedTags, svg, fetching} = this.props.homeState
    return (
      <div>
        <Helmet
          title="LoginContainer"
          meta={[
            {
              name: 'description',
              content: 'Description of LoginContainer'
            },
          ]}
        />
        <Container fluid>
          <Header
            handleSearchTags={(tags) => this.props.setTags(tags)}
            handleSearchText={(text) => this.props.setText(text)}
            tags={selectedTags}
          />
          <div style={{marginTop: '1rem'}}>
            <Row>
              <Col sm={{size: 3}}>
                <Tags
                  onClickTag={(tag) => this.props.addTag(tag)}
                />
              </Col>
              <Col sm={{size: 9}}>
                <CardColumns>
                  {
                    fetching ? <ClipLoader color='#2895F1'
                                           size='12px'
                                           margin='0 auto'/> : (svg.length > 0 ? svg.map((item, i) => {
                      let url = 'viewer?id=' + item.id
                      return (
                        <Card inverse key={i}>
                          <CardImg top width='100%' src={`hw/services/files/svg/${item.id}/content.svg`}
                                   alt='Card image cap'/>
                          <CardImgOverlay>
                            <Link to={url}>
                              <CardTitle>{item.fileName}</CardTitle>
                            </Link>
                            <CardText>
                              <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                          </CardImgOverlay>
                        </Card>
                      )
                    }) : 'No items')
                  }
                </CardColumns>
              </Col>
            </Row>
          </div>
        </Container>

      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  homeState: makeSelectHome(),
})

const mapDispatchToProps = {
  getTags,
  setTags,
  setText,
  addTag,
  getSVG
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
