import React, { Component } from 'react'

class Email extends Component {
  render (){
    const {
      text,
    } = this.props

    return (
      <a href="mailto:jennifer.c.patel@gmail.com">{text}</a>
    )
  }
}

export default Email
