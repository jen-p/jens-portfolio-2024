import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = (props) => {
    const {
      title,
      desc,
      link,
      hero,
    } = props

    return (
      <div className="projectCardWrapper">
        <div className="projectCard">

            <div className="projectDeets">
              <Link href={link}><h2 className="title">{title}</h2></Link>
              <p className="desc">{desc}</p>
            </div>
            <Link href={link}>
              <div className="projectHero">
                <Image src={hero} height={100} width={100}/>
              </div>
            </Link>
        </div>
      </div>
    )
}

export default ProjectCard
