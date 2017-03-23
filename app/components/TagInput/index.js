/**
 *
 * TagInput
 *
 */

import React from 'react'
// import styled from 'styled-components';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class TagInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <TagsInput value={this.props.tags}
                 inputProps={{className: 'react-tagsinput-input', placeholder: 'add tag...'}}
                 onChange={this.props.handleSearchTags}/>
    )
  }
}

TagInput.propTypes = {}

export default TagInput
