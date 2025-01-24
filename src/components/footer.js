import React from 'react'
//import { Link } from 'gatsby'

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
    
  return (
    <footer>
    	<div className="container">
        <div className="copyright">
          <p>Created with &lt;3 by Jennifer Patel &copy; {year}</p>
        </div>
      </div>
  </footer>
  )
}

export default Footer
