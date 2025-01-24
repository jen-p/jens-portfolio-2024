import React from 'react'
import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import projects from "../data/projects"
import styles from "../styles/main.scss";

const ProjectLayout = (props) => {

  /*constructor(props) {
    super(props)

    this.state = {
      id: projects
        .find(project => project.id === this.props.id),
    }
  }*/

  const id = projects.find(project => project.id)
  
    return (
      <Layout>
        <div className="project-page">
          <div className="project-hero">
            <Image className="hero-image" filename={id.hero} />
          </div>
          <div className="container project-title">
            <h1 className="title">{id.title}</h1>
            <p className="client">{id.client}</p>
            <p className="project-date">{id.date}</p>
          </div>
          <div className="case-study-content">
            {props.children}
          </div>
        </div>
      </Layout>
    )
  
}

export default ProjectLayout
