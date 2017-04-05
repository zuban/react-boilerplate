/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { connect } from 'react-redux'
import withProgressBar from 'components/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css'
import Notification from '../../components/Notification'
import { makeNotificationSelector } from './selectors'
import { createStructuredSelector } from 'reselect'
import { removeNotification } from 'actions'
const AppWrapper = styled.div`
`
export function App (props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Maground"
        defaultTitle="Maground"
        meta={[
          {name: 'Maground app', content: 'Maground app'},
        ]}
      />
      {React.Children.toArray(props.children)}
      <Notification removeNotification={props.removeNotification} notifications={props.notifications}/>
    </AppWrapper>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}
const mapStateToProps = createStructuredSelector({
  notifications: makeNotificationSelector(),
})
const mapDispatchToProps = {
  removeNotification
}

export default withProgressBar(connect(mapStateToProps, mapDispatchToProps)(App))

