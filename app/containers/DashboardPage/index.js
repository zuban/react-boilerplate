/*
 *
 * DashboardPage
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectDashboardPage from './selectors'

export class DashboardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet
          title="DashboardPage"
          meta={[
            {name: 'description', content: 'Description of DashboardPage'},
          ]}
        />
      </div>
    )
  }
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  DashboardPage: makeSelectDashboardPage(),
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
