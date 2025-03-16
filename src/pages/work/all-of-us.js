import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectLayout from '../../components/project-layout'

const Page = () => (
  <ProjectLayout
    id="all-of-us">
    <div className="container">
      <div className="projectStats">
        <div className="stat">
          <p className="statLabel">Role</p>
          <p className="statValue">Design Lead</p>
        </div>

        <div className="stat">
          <p className="statLabel">Team size</p>
          <p className="statValue">2-4 designers</p>
        </div>

        <div className="stat">
          <p className="statLabel">Project Length</p>
          <p className="statValue">4 years</p>
        </div>

        <div className="stat">
          <p className="statLabel">Organization</p>
          <p className="statValue">GoInvo</p>
        </div>
      </div>

      <h2>Problem Statement</h2>
      <p>Medical research has a diversity problem. 90% of the U.S. patient population<sup><a href="#references">1</a></sup> aren't involved in research and don't want to think about their health &mdash; until they have to. The <i>All of Us</i> Research Program aimed to enroll 1 million participants to deliver the most diverse medical research database. The program required design focused on the participant experience to enroll and retain the number of participants to achieve their goal. With experience and expertise in health design for humans and shipping research software, we brought this focus to the foreground.<sup><a href="#references">1</a></sup></p>
      <p>My team supported and designed a digital experience to:</p>
      <ul>
        <li>Provide health surveys and returns of results so that participants from all walks of life can understand.</li>
        <li>Onboard new participants into the <i>All of Us</i> Research Program.</li>
        <li>Help participants consent to join and contribute health data to science.</li>
        <li>Show how participation matters to the nation and the lives of all patients.</li>
      </ul>

      <p>Through program-wide design, UX leadership, guidance, and coordination between research groups, program offices, and technology delivery teams, our team has helped to:</p>
      <ul>
        <li>Deliver experiences for participants to contribute more health information through surveys and sharing biosamples.</li>
        <li>Provide engaging insights to share with participants what the program is learning from their contributions.</li>
        <li>Make accessible pathways to encourage more participants to join the <i>All of Us</i> Research Program.</li>
        <li>Reach 700,000+ enrolled participants and growing.</li>
      </ul>

      <div class="caseStudySection">
        <h2>Background</h2>
        <p>The <i>All of Us</i> Research Program, run by the National Institutes of Health (NIH), is a nationwide health study** that aims to collect health data from a diverse group of 1 million or more people living in the United States. The program aims to run for 10 years or more, providing this diverse dataset longitudinally. Every human is unique, with different genes, lifestyles, and living conditions, and circumstances that change over time. The more researchers can learn about what affects people’s health, the better they will be able to drive research that impacts more humans.</p>
        <p>The program is an ambitious government-funded health research effort with the goal to retain and engage participants long-term. More than a hundred funded partner organizations work together to run the *All of Us* Research Program.<sup><a href="#references">2</a></sup> GoInvo was brought in as a small task force, working as the design team for the PTSC under Vibrent Health to support the digital experience in the <i>All of Us</i> PTSC Participant Portal.</p>
        <Image src="/images/aou/02-where-goinvo-fits-in-the-aou.jpg" height={977} width={2000} alt="" />
        <p className="caption">More than a hundred funded partner organizations work together to run the <i>All of Us</i> Research Program. GoInvo is just a small part of this consortium.</p>
        <p>Participants who join contribute through answering surveys, providing biosamples, sharing electronic health records (EHRs), and more. The program maintains their information and provides de-identified data to researchers. Participants can access the online portal to stay connected with the program and receive results demonstrating the impact of their contributions to the program. PTSC's focus was to provide a digital platform to support participation by delivering surveys, communications, and returns of results. GoInvo facilitated this by focusing on participant's perspectives and needs.</p>
        <iframe width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fe7diNgM5UANDvlNZrQQlWT%2FCase-Study---All-of-Us%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D428-41589%26viewport%3D-4280%252C575%252C0.57%26t%3DGTLchu6PehP12rr7-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D428%253A41589%26mode%3Ddesign%26hide-ui=1" allowfullscreen></iframe>
      </div>

      <div class="caseStudySection">
        <h2>Process</h2>
        <p>Our day-to-day operations varied to adapt to program priorities, encompassing diverse roles that involved design, project management, user experience expertise, product validation (QA), and collaborative engagement with program consortium stakeholders.</p>
        <Image src="/images/aou/04-how-we-work.jpg" height={883} width={2000} alt="" />
        <h4>We dive deep to understand the program and the platform.</h4>
        <ol>
          <li>Live the problem (enroll and participate in the program).</li>
          <li>See the problem (work directly with participants, researchers, policy, and engineering).</li>
          <li>Design shippable solutions (understand and build around program and technical constraints).</li>
        </ol>

      </div>

      <div class="caseStudySection">
        <h2>Solution</h2>
        <h4></h4>
        
      </div>
      <div class="caseStudySection">
        <h2>Improvements</h2>
        
      </div>

      <div class="case-study-section references">
        <h2>References</h2>
        <ol>
          <li><a href="https://www.mayoclinicproceedings.org/article/S0025-6196(20)31259-3/fulltext" target="_blank noreferrer">Minority Representation in Clinical Trials in the United States</a></li>
          <li><a href="https://www.researchallofus.org/" target="_blank noreferrer">Research at <i>All of Us</i></a></li>

        </ol>
      </div>

    </div>
  </ProjectLayout>
)

export default Page
