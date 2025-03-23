import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectLayout from '../../components/project-layout'

const Page = () => (
  <ProjectLayout
    id="oncology-prior-auths">
    <div className="container">
      <div className="projectStats">
          <div className="stat">
            <p className="statLabel">Role</p>
            <p className="statValue">Design Lead</p>
          </div>

          <div className="stat">
            <p className="statLabel">Team size</p>
            <p className="statValue">2 designers</p>
          </div>

          <div className="stat">
            <p className="statLabel">Project Length</p>
            <p className="statValue">1 year</p>
          </div>
      </div>
        
        <div class="case-study-section">
          <h2>Process</h2>
          <h4></h4>
          
        </div>

        <div class="case-study-section">
          <h2>Solution</h2>
          <h4></h4>
          
        </div>
        <div class="case-study-section">
          <h2>Improvements</h2>
          
        </div>

    </div>
  </ProjectLayout>
)

export default Page
