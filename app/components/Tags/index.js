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
// import styled from 'styled-components';
import TagModalWindow from '../TagModal'

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

  render () {
    return (
      <div>
        <div className="hashtag-row">
          {this.props.tags ? this.props.tags.map((item, i) => {
              if (item.value == '') {
                return null
              }
              else {
                return <div>
                  <Badge
                    data-tip data-for={item.value}
                    style={{cursor: 'pointer'}}
                    color={item.owner.id === userId ? 'default' : 'primary'}
                    onClick={(e) => this.onOpenTag(item.value)}
                    pill
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
                        {item.owner.id === userId ? <a
                          onClick={(e) => this.handleOpenModal(e, item)}
                          style={{float: 'right'}}
                        >
                          Edit
                        </a> : null}

                  </span>
                    </ReactTooltip>
                    {item.value}
                  </Badge>
                </div>
              }
            }
          ) : null}
          <TagModalWindow modal={this.state.modal} toggle={this.toggle}/>
        </div>
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

Tags.propTypes = {}

export default Tags
