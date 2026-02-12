import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = (props) => {
    const {
      id,
      title,
      desc,
      link,
      hero,
      alt,
      index
    } = props

    const isEven = index % 2 === 0

    return (
      <div className="projectCardWrapper">
        <div className={`projectCard ${id}`}>
          <Link className="projectImage" href={link} >
            <div className="projectHero">
              <img src={hero} className="heroImage" alt={alt} />
            </div>
          </Link>
          <div className="projectDeets">
            <Link href={link}><h2 className="title">{title}</h2></Link>
            <p className="desc">{desc}</p>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard
