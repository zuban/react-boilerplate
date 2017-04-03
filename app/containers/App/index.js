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

import withProgressBar from 'components/ProgressBar'
import 'bootstrap/dist/css/bootstrap.css'

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
    </AppWrapper>
  )
}

App.propTypes = {
  children: React.PropTypes.node,
}

export default withProgressBar(App)
