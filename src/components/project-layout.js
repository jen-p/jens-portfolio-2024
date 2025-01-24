import React, { useState } from 'react'
import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import projects from "../data/projects"
import styles from "../styles/main.scss";

const ProjectLayout = (props) => {
  const [id, setId] = useState(() => projects.find(project => project.id === props.id))

  /*constructor(props) {
    super(props)

    this.state = {
      id: projects
        .find(project => project.id === this.props.id),
    }
  }*/

  // const id = projects.find(project => project.id === props.id)
  console.log("id", id)
  
    return (
      <Layout>
        <div className="projectPage">
          <div className="projectHero">
          <Image src={id.hero} height={id.h} width={id.w} className="heroImage" />
          </div>
          <div className="container projectTitle">
            <h1 className="title">{id.title}</h1>
            <p className="client">{id.client}</p>
            <p className="projectDate">{id.date}</p>
          </div>
          <div className="caseStudyContent">
            {props.children}
          </div>
        </div>
      </Layout>
    )
  
}

export default ProjectLayout
