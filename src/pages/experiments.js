import React from 'react'

import ProjectCard from "../components/experimentCard"
import projectList from "../data/experiments"
import styles from "../styles/main.scss"
import Layout from '../components/layout'
//import Hero from '../components/hero'

const Experiments = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div className="container">
        <div className="experiments">
          <h1 className="pageTitle">Experiments</h1>
          <p>Some fun doodles and projects I've been working on.</p>
          <div className="projectList">
            {projectList.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  id={project.id}
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
    </div>
  </Layout>
)

export default Experiments
