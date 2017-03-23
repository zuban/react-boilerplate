/**
 * Created by sergeyzubov on 18/03/2017.
 */
import React, { Component } from 'react'
import Select from 'react-select'
import { getService } from '../../service/Service'
// eslint-disable-next-line new-cap
const service = new getService()

class Users extends Component {
  getUsers (input) {
    if (!input) {
      return Promise.resolve({options: []})
    }
    return service.getUserByEmail(input)
      .then((options) => {
        return {
          options: [{
            label: options.email,
            value: options.id,
            meta: options,
          }]
        }
      })
  }

  render () {
    let {value, onChange} = this.props.input
    return (<div>
      <Select.Async
        multi
        value={value}
        onChange={(val) => onChange(val)}
        loadOptions={this.getUsers}
        backspaceRemoves
        valueKey="value"
        labelKey="label"
      />
    </div>)
  }
}
export default Users
