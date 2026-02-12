import React from 'react'

import ProjectCard from "../components/projectCard"
import projectList from "../data/projects"
import styles from "../styles/main.scss"
import Layout from '../components/layout'
//import Hero from '../components/hero'

const Whoami = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className="container">

        <div className="whatdo">
          <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
          <h1>I am a product designer specializing in systems design for healthcare</h1>
        </div>
        <div className="projectList">
          {projectList.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                link={project.link}
                desc={project.desc}
                hero={project.hero}
                w={project.w}
                h={project.h}
                title={project.title}>
              </ProjectCard>
            )
          })}
        </div>

      </div>
    </div>
  </Layout>
)

export default Whoami
