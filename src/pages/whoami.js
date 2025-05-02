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
          <p>I'm Jennifer Patel, a Boston-based product designer with 14 years of experience leading UX and transforming complex challenges into intuitive solutions across healthcare, AI, government, and enterprise sectors, creating usable and beautiful designs for humans. I have a passion for creating solutions to advance medical science, improve access to care, and to keep pushing for social equality and global good.</p>
          <p>With BFA in New Media Design & Imaging from the Rochester Institute of Technology, I've been designing for enterprise and healthcare at GoInvo since 2011. I've covered projects in all aspects, from user and domain research, project management, ideation, pixels, prototypes, user testing, facilitating workshops, and guiding as well as contributing to development and production, ranging from small homegrown efforts to larger systems in corporate healthcare.</p>
          <p>Outside the office, I love my cats, reading, crocheting, gaming, Star Trek, Doctor Who, and writing stories.</p>
        </div>

        <div className="flex-container">
          <div className="ethos section one-col">
            <h2>Ethos</h2>
            <ul>
              <li>Listen well</li>
              <li>Design with the human in the loop</li>
              <li>Make good work, but also Do Good</li>
            </ul>
          </div>

          <div className="skills section one-col">
            <h2>Skills</h2>
            <ul className="two-col-list">
              <li>Usability research</li>
              <li>Product research</li>
              <li>Product Architecture</li>
              <li>Journey mapping</li>
              <li>Product design</li>
              <li>Interface design</li>
              <li>Prototyping</li>
              <li>Figma</li>
              <li>Adobe Design Suite</li>
              <li>HTML5</li>
              <li>CSS, LESS, SCSS</li>
              <li>Some JS, JQuery, React.js</li>
              <li>Project management</li>
              <li>Studio management</li>
            </ul>
          </div>
        </div>

        <div className="pub section">
          <h2>Publications</h2>
          <div className="flex-container">
            <div className="one-col">
              <div className="pub-item">
                <h4 className="margin-top--none"><a href="https://goinvo.com/vision/physician-burnout/">Physician Burnout</a></h4>
                <p><em>May 2020, co-author</em>
                  <br />Meghana Karande
                  <br />Jen Patel
                </p>
              </div>
              <div className="pub-item">
                <h4><a href="https://goinvo.com/vision/patient-centered-consent/">A Guide to Patient-Centered</a></h4>
                <p><em>Feb 2020, co-author</em>
                  <br />Sharon Lee
                  <br />Jen Patel
                </p>
              </div>
              <div className="pub-item">
                <h4><a href="https://designmuseumfoundation.org/open-source-healthcare/">It’s Time for Open Source Healthcare</a></h4>
                <p><em>Summer 2019, co-author</em>
                  <br />Juhan Sonin
                  <br />Jon Follett
                  <br />Jen Patel
                </p>
              </div>
            </div>
            <div className="one-col">
              <div className="pub-item">
                <h4  className="margin-top--none"><a href="https://goinvo.com/vision/loneliness-in-our-human-code/">Loneliness in Our Human Code</a></h4>
                <p><em>Nov 2018, editor</em>
                  <br />Vanessa Li
                  <br />Jen Patel
                </p>
              </div>
              <div className="pub-item">
                <h4><a href="inspiredEHRs.org">Inspired EHRS: Designing for Clinicians</a></h4>
                <p><a href="https://academic.oup.com/jamia/article/26/2/95/5260829">JAMIA paper</a>
                  <br /><em>Fall 2015, co-author, designer, engineer</em>
                  <br />Jeffery L Belden, Richelle J Koopman
                  <br />Catherine Plaisant, Joi L Moore,
                  <br />Jennifer Patel, Nathan J Lowrance,
                  <br />Andrew Hutson, Suzanne A Boren
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="edu section one-col">
            <h2>Education</h2>
            <p>2007 - 2011 BFA 
              <br />New Media Design & Imaging, 
              <br />Rochester Institute of Technology
            </p>
            <p>I'm always learning new things every day, and with every project.</p>
          </div>

          <div className="contact-socials section one-col">
            <h2>Find me online</h2>
            <ul className="no-list-style">
              <li><a href="www.linkedin.com\in\jennifer-patel-sobus"><span className="icon linkedin"></span>LinkedIn</a></li>
              <li><a href="https://github.com/jen-p"><span className="icon github"></span>GitHub</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </Layout>
)

export default Whoami
