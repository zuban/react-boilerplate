/**
 *
 * Tags
 *
 */

import {
  Badge,
  Button,
} from 'reactstrap'

import React from 'react'
import ClipLoader from 'halogen/ClipLoader'
// import styled from 'styled-components';
import TagModalWindow from '../../components/TagModal'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import { makeSelectTags } from './selectors'
import { makeSelectCurrentUser } from '../App/selectors'
import { Link } from 'react-router'
class Tags extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor (...props) {
    super(...props)
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

  handleOpenNewTagModal () {

  }

  render () {
    const {loading, tags} = this.props.homeState
    return (
      <div>
        {loading ? <ClipLoader color='#2895F1'
                               size='12px'
                               margin='0 auto'/> : <div className="hashtag-row">
          {tags ? tags.map((item, i) => {
              if (item.value == '') {
                return null
              }
              else {
                return <div
                  className="hashtag"
                ><Button
                  color="link"
                  data-tip
                  data-for={item.value}
                  style={{cursor: 'pointer'}}
                  onClick={(e) => this.props.onClickTag(item.value)}
                  key={i}>
                  <ReactTooltip
                    class='badge-tooltip'
                    delayHide={200}
                    id={item.value}
                    place='top'
                    type='dark'
                    effect='solid'>
                    <h4>{item.value}</h4>
                    <p>{item.description}</p>
                    <span>
                    <small
                      className="form-text"
                      style={{
                        color: 'white',
                        display: 'inline',
                        float: 'left',
                        marginTop: '.10rem',
                        marginRight: '15px'
                      }}>{item.users.length} members</small>
                      {item.owner.id === 1333 ? <a
                        onClick={(e) => this.handleOpenModal(e, item)}
                        style={{float: 'right'}}
                      >
                        Edit
                      </a> : null}

                  </span>
                  </ReactTooltip>
                  {`#${item.value}`}
                </Button>
                </div>
              }
            }
          ) : null}
          <TagModalWindow modal={this.state.modal} toggle={this.toggle}/>
        </div>
        }
        <div className="hashtag-row">
          <Button
            size="sm"
            outline onClick={() => this.handleOpenNewTagModal()}
            color="primary">Add new
            tag</Button>{' '}
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  homeState: makeSelectTags(),
  user: makeSelectCurrentUser()
})

const mapDispatchToProps = {
  // getTags,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
