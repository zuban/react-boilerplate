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
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          {name: 'description', content: 'A React.js Boilerplate application'},
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
