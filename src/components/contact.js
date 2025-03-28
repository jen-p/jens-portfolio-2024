import React from 'react'
import Button from "./Button"
//import { Link } from 'gatsby'

const Contact = () => {
    
  return (
    <div className="contactBox">
        <div className="container">
            <h2>Get in touch!</h2>
            <p>Interested in collaborating or have a project in mind? Let's chat!</p>
            <Button
                link="mailto:jennifer.c.patel@gmail.com"
                text="Contact me" >
              </Button>
            
        </div>
  </div>
  )
}

export default Contact