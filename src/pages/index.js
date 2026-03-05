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
          <div className="bars"><div className="bar bar1"></div><div className="bar bar2"></div><div className="bar bar3"></div></div>
          <h1>I am a product designer specializing in systems design for healthcare</h1>
          <p>With 15 years of experience designing complex clinical, research, and enterprise platforms, I work at the intersection where technology, health, and human decision-making collide . I aim to bring clarity to fragmented ecosystems and messy problem spaces to better deliver quality and equitable care for all.</p>
        </div>
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
  </Layout>
)

export default Whoami
