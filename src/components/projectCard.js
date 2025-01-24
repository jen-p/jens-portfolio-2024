import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = (props) => {
    const {
      title,
      desc,
      link,
      hero,
      w,
      h,
    } = props

    return (
      <div className="projectCardWrapper">
        <div className="projectCard">
          <Link href={link}>
            <div className="projectHero">
              <Image src={hero} height={h} width={w} className="heroImage"  />
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
