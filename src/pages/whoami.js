import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "../styles/main.scss"
import Layout from '../components/layout'

const Whoami = () => (
  <Layout>
    <div className="whoami container">
      <div className="content">
        <h1>Who am I?</h1>
        <div className="blurb section">
          <p>Based in the Boston area, I'm a user experience designer who specializes in healthcare and system design, creating usable and beautiful designs with and for real data big and small. I have a passion for creating solutions to advance medical science, improve access to care, and to keep pushing for social equality and global good.</p>
          <p>With BFA in New Media Design & Imaging from the Rochester Institute of Technology, I’ve been designing for enterprise and healthcare at GoInvo since 2011. I've covered projects in all aspects, from user and domain research, project management, pixels, prototypes, user testing, and into guiding as well as participating in development and production, ranging from small homegrown efforts to larger systems in corporate healthcare.</p>
          <p>Outside the office, I love cats, gaming, Star Trek, Doctor Who, and writing stories.</p>
        </div>

        <div className="ethos section">
          <h2>Ethos</h2>
          <ul>
            <li>Listen well</li>
            <li>Design with the human in the loop</li>
            <li>Make good work, but also Do Good</li>
          </ul>
        </div>

        <div className="skills section">
          <h2>Skills</h2>
          <ul>
            <li>User Research</li>
            <li>Product Architecture</li>
            <li>Prototyping</li>
            <li>Figma</li>
            <li>Adobe Design Suite</li>
            <li>HTML5</li>
            <li>CSS, LESS, SCSS</li>
            <li>Some JS, JQuery, React.js</li>
          </ul>
        </div>

        <div className="edu section">
          <h2>Education</h2>
          <p>2011 BFA graduate of New Media Design program at Rochester Institute of Technology</p>
          <p>I'm always learning new things every day, and with every project.</p>
        </div>
      </div>
    </div>

  </Layout>
)

export default Whoami
