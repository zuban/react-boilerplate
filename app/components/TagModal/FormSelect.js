import React from 'react'
import Select from 'react-select'

const SelectBox = ({input, ...props}) => {
  let {value, onBlur} = input

  return (<Select
    multi={true}
    {...input}
    onBlur={() => onBlur(value)}
    {...props}
  />)
}

SelectBox.propTypes = {
  input: React.PropTypes.object.isRequired,
}

export default SelectBox

