import React, { Component } from 'react'
import { Alert } from 'reactstrap'
class Notification extends Component {
  render () {
    const {notifications} = this.props
    if (!notifications.length) return false

    debugger
    return (
      <div style={{
        position: 'fixed',
        zIndex: '10',
        top: '52px',
        right: '52px'
      }}>
        {
          notifications.map((item, idx) => {
            return <Alert key={item.id} onClick={() => this.props.removeNotification(item.id)} color="success">
              <strong> {item.header}</strong> {item.message}
            </Alert>
          })
        }
      </div>)
  }
}

// Connecting component to the store
export default Notification
