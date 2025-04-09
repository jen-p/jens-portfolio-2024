import React from 'react'
import Button from "../components/button.js"

const Contact = () => {
    
  return (
    <div className="contactBox">
        <div className="container">
            <h2>Get in touch!</h2>
            <p>Interested in collaborating or have a project in mind? Let's chat!</p>
            <a
                href="mailto:jennifer.c.patel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                >
                Contact me
            </a>
        </div>
  </div>
  )
}

export default Contact