import React, { Component } from 'react'

class Button extends Component {
  render (){
    const {
      link,
      text,
    } = this.props

    return (
      <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          {text}
        </a>
    )
  }
}

export default Button
