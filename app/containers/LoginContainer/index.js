/*
 *
 * LoginContainer
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import makeSelectLoginContainer from './selectors'

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <Helmet
          title="LoginContainer"
          meta={[
            {name: 'description', content: 'Description of LoginContainer'},
          ]}
        />
      </div>
    )
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  LoginContainer: makeSelectLoginContainer(),
})

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
