import React from 'react'
import Button from "../components/button.js"

const Contact = () => {
    
  return (
    <div className="contactBox">
        <div className="left">
            <h2>Get in touch!</h2>
            <p>Interested in collaborating or have a project in mind? Let's chat!</p>
        </div>
        <div className="right">
            <a
                href="mailto:jennifer.c.patel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-white button-big"
                >
                <span className="inline-block">
                    <span className="icon email"></span>
                </span>
                <span className="inline-block">
                    <span className="block">Email</span>
                    <span className="block text-small">jennifer.c.patel@gmail.com</span>
                </span>
            </a>
            <a
                href="www.linkedin.com/in/jennifer-patel-sobus"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-white button-big"
                >
                <span className="inline-block">
                    <span className="icon linkedin"></span>
                </span>
                <span className="inline-block">
                    <span className="block">LinkedIn</span>
                    <span className="block text-small">Connect with me</span>
                </span>
            </a>
            <a
                href="https://github.com/jen-p"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-white button-big"
                >
                <span className="inline-block">
                    <span className="icon github"></span>
                </span>
                <span className="inline-block">
                    <span className="block">Github</span>
                </span>
            </a>
        </div>
  </div>
  )
}

export default Contact