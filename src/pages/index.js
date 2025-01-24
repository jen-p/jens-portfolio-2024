import React from 'react'
import ProjectCard from "../components/projectCard"
import projectList from "../data/projects"
import styles from "../styles/main.scss";

import Layout from '../components/layout'
//import Hero from '../components/hero'

const Whoami = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className="container">

        <div className="whatdo">
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
