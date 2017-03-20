/**
 * Created by sergeyzubov on 20/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import PulseLoader from 'halogen/PulseLoader'

export function requireAuthentication (Component) {
  class AuthenticatedComponent extends Component {

    componentWillMount () {
      this.checkAuth()
    }

    componentWillReceiveProps (nextProps) {
      this.checkAuth()
    }

    checkAuth () {
      if (!this.props.isAuthenticated && !this.props.loading) {
        let redirectAfterLogin = this.props.location.pathname
        browserHistory.push(`/login?next=${redirectAfterLogin}`)
      }
    }

    render () {
      return (
        <div>
          {this.props.loading
            ? <PulseLoader
              color='#2895F1'
              size='12px'
              margin='4px'
            />
            : <div>
              {this.props.isAuthenticated === true
                ? <Component {...this.props} />
                : null
              }
            </div>
          }
        </div>
      )
    }
  }

  AuthenticatedComponent.propTypes = {
    loading: React.PropTypes.bool.required,
    isAuthenticated: React.PropTypes.bool.required,
    location: React.PropTypes.object,
  }

  return AuthenticatedComponent
}
