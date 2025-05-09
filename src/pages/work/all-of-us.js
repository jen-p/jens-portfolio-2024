import React from 'react'
import Link from 'next/link'
import ProjectLayout from '../../components/project-layout'
import styles from "../../styles/case-study-aou.scss";

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
      </div>

      <h2>Problem Statement</h2>
      <p>Medical research has a diversity problem. 90% of the U.S. patient population<sup><a href="#references">1</a></sup> aren't involved in research and don't want to think about their health &mdash; until they have to. The <i>All of Us</i> Research Program aimed to enroll 1 million participants to deliver the most diverse medical research database. The program required design focused on the participant experience to enroll and retain the number of participants to achieve their goal. With experience and expertise in health design for humans and shipping research software, we brought this focus to the foreground.<sup><a href="#references">1</a></sup></p>
      <p>Our team supported and designed a digital experience to:</p>
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

      <div className="caseStudySection">
        <h2>Background</h2>
        <p>The <i>All of Us</i> Research Program, run by the National Institutes of Health (NIH), is a nationwide health study that aims to collect health data from a diverse group of 1 million or more people living in the United States. The program aims to run for 10 years or more, providing this diverse dataset longitudinally. Every human is unique, with different genes, lifestyles, and living conditions, and circumstances that change over time. The more researchers can learn about what affects people’s health, the better they will be able to drive research that impacts more humans.</p>
        <p>The program is an ambitious government-funded health research effort with the goal to retain and engage participants long-term. More than a hundred funded partner organizations work together to run the <i>All of Us</i> Research Program.<sup><a href="#references">2</a></sup> GoInvo was brought in as a small task force, working as the design team for the PTSC under Vibrent Health to support the digital experience in the <i>All of Us</i> PTSC Participant Portal.</p>
        
        <img src="/images/aou/02-where-goinvo-fits-in-the-aou.jpg" alt="" />
        <p className="caption">More than a hundred funded partner organizations work together to run the <i>All of Us</i> Research Program. GoInvo is just a small part of this consortium.</p>
        
        <p>Participants who join contribute through answering surveys, providing biosamples, sharing electronic health records (EHRs), and more. The program maintains their information and provides de-identified data to researchers. Participants can access the online portal to stay connected with the program and receive results demonstrating the impact of their contributions to the program. PTSC's focus was to provide a digital platform to support participation by delivering surveys, communications, and returns of results. GoInvo facilitated this by focusing on participant's perspectives and needs.</p>
        <iframe width="100%" height="400" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fe7diNgM5UANDvlNZrQQlWT%2FCase-Study---All-of-Us%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D428-41589%26viewport%3D-4280%252C575%252C0.57%26t%3DGTLchu6PehP12rr7-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D428%253A41589%26mode%3Ddesign%26hide-ui=1" allowfullscreen></iframe>
      </div>

      <div className="caseStudySection">
        <h2>Process</h2>
        <p>Our day-to-day operations varied to adapt to program priorities, encompassing diverse roles that involved design, project management, user experience expertise, product validation (QA), and collaborative engagement with program consortium stakeholders.</p>
        
        <div className="taskContainer">
          <div className="tasks">
            <ul>
              <li>Lead design</li>
              <li>Advocate for good user interface techniques</li>
              <li>Develop program designs / services</li>
              <li>Product design maintenance</li>
              <li>The daily work of moving many initiatives forward for <i>All of Us</i></li>
            </ul>
          </div>
          <div className="tasksImage">
          <img src="/images/aou/04-how-we-work_2.jpg" alt="50% facilitate UX across participant program, 25% software design, 12% ruser research and testing, 7% BS, 4% overhead management, 2% designing the future of health research" />
          <p className="caption">Illustration by Parsuree Vatanasirisuk</p>
          </div>
        </div>
        
        
        <h3>We dive deep to understand the program and the platform.</h3>
        <ol>
          <li>Live the problem (enroll and participate in the program).</li>
          <li>See the problem (work directly with participants, researchers, policy, and engineering).</li>
          <li>Design shippable solutions (understand and build around program and technical constraints).</li>
        </ol>

        <p>Our team became embedded as user experience designers on <i>All of Us</i> Research Program initiatives. We worked on both a strategic and tactical level, collaborating with program (<i>All of Us</i>) and product (Vibrent Health) teams, making recommendations on how participants would perceive and use new experiences, and helping to solve issues in translating those experiences into software requirements. With this, we built trust with diverse stakeholders at each step throughout the program. </p>

        <h4>Lived the experience with a deep dive audit of the participant experience.</h4>
        <p>We conducted a system-wide review of the participant portal and user feedback to better understand the participant experience. From creating an account, completing consents, answering surveys, we dug into every detail and corner of the portal and developed recommendations along the way. We enrolled, became official participants in the <i>All of Us</i> Research Program and learned first hand what an experience of the participant journey could be like, with an understanding that there would be variation under different sets of circumstances.</p>

        <h4>Got to know the platform (behind the scenes).</h4>
        <p>Based on our expert review, we proposed improvements that would benefit the overall user experience. The recommendations ranged from user interface enhancements such as styling, consistency of interactions, content voice, readability, comprehension, information hierarchy and architecture, and more. In the process, we learned that engineering and policy constraints and operations could be complex and challenging, impacting the feasibility for what could be considered a simple change, like button color. The reality of designing for a national research program is that prioritization and scope of work depend upon funding decisions, and we learned how to design and strategize within that constraint.</p>

        <h4>Delivered shippable designs for program initiatives.</h4>
        <p>We worked closely with Vibrent Health's program and technical teams to support design tasks for <i>All of Us</i>, allowing us to learn how the teams implement, develop, and maintain the program and portal &mdash; what’s possible and what’s not. Knowing how the portal delivers experiences to participants, its capabilities and constraints, is crucial when delivering user-friendly and accessible designs that are possible to implement with the resources and timelines provided.</p>

        <img src="/images/aou/03-portal-dashboard.jpg" alt="" />

        <h4>Established a design library and created reusable UI components.</h4>
        <p>We compiled a design library and usability patterns based on the existing portal styles. These reusable components and style guides allowed program design teams to design and build prototypes quickly with consistency. As we continued to design new activities for participants in the portal, we adjusted and expanded this guide as needs came up and recommendations were organized among other priorities.</p>

        <img src="/images/aou/06-ui-library.jpg" alt="" />
        <p className="caption">Styles from <i>All of Us</i> UI library</p>

        <h4>Developed cohesive design systems and best practices across the digital experience.</h4>
        <p>Collaborating with the NIH program and design teams, we developed guidelines to establish and document standards for program-wide visuals. Together, we compiled existing illustrations into an open library of elements so that any designer can reuse ready-made assets to create new graphics for any program materials, aiming for consistency across <i>All of Us</i> design, a library which can be used as a repository for new illustration elements that will continue to grow over the life of the program.</p>

        <img src="/images/aou/07-illustration-assets.jpg" alt="" />
        <p className="caption">Styles and guidelines from All of Us illustration guide</p>

        <h4>More than a design team.</h4>
        <p>Over the course of our work, we touched on projects ranging from small (like a catch up survey to a few thousand participants) to large (like how we deliver genomic results). Because we worked on with teams across the entire program, our team grew our knowledge of how the program worked that few program teams had. We not only built a library of design patterns and prototypes, but we also built a library of requirements and documentation.</p>

        <p>Our role became more than creating and delivering designs. We communicated often non-visual design via requirements lists and specifications, partly for documentation, but also to help drive conversations. While we did often spend a lot of time on pixels and prototyping, we also supplied the larger experience, which often includes gritty details of invisible product design.</p>

        <p>We helped to glue conversations and pieces of the experience together, and communicated the overall user experience across different teams, especially in conversations between NIH and Vibrent Health. We became the go-to team to answer most questions about how the program or experience worked.</p>

        <h4>Balanced usability, technical, and program needs.</h4>
        <p>When launching a new activity for participants, GoInvo worked closely with the NIH program and UX strategy teams to understand the initiative goals&mdash; what we are asking participants to do, and what participants need in return. This process includes collaborating with NIH UX on the overall strategy, making recommendations, and helping to define and solidify requirements and priorities. </p>

        <p>Based on the accepted requirements and recommendations, our team developed designs that considered not only the best user experience but also data collection completeness, accessibility to participants who are underrepresented in biomedical research (UBR), implementation timeline and resources, and transparency.</p>

        <p>Launching a new activity, like a survey, to the participant portal can take several months and up to a year or more. Each survey has to go through the program's institutional review board (IRB) and various NIH leadership approvals. Stakeholders, including researchers, scientists, product owners, UX strategists, designers, and developers, work together on requirements, communication strategies, designs, and more. Once the protocol has been approved, with design and technical strategy set, the activity will go to implementation. We will then review the flow in a testing environment and conduct product validation and debugging before launching to public participants.</p>

        <p>Throughout the process, our role as user experience designers is to advocate for participants and support the best experience while balancing usability against program policy, product constraints, and implementation.</p>

        <img src="/images/aou/08_form.jpg" alt="" />

      </div>

      <div className="caseStudySection">
        <h2>Solution</h2>
        <h4>Developed strategy for returning results of portal activities.</h4>
        
        <p>The program aims to provide meaningful value to participants by providing returns of results based on their contributions through activities like providing biosamples and completing surveys. Through user interviews, iterations of design, and participant feedback, we found that participants were looking for more context and substance than the program was able to provide. This called for creative solutions to deliver feasible methods of applying meaning, context, and value to participant returns of results.</p>

        <p>We developed content guidelines, design guidelines, and a process to help teams deliver returns of results that participants will find valuable. Along with a technical strategy that the PTSC developed, the HTML-based return of results frees the development from the technical constraints common to other parts of the portal.</p>

        <h4>Proposed new experiences and designs.</h4>
        <p>Our team spent time on designing many concepts, some of which didn't make it into the experience. We wanted to show what the program could be capable of and give stakeholders ideas to share and grow within the program, whether or not they became prioritized projects.</p>
        <ul>
          <li>Focused home page that highlights the next activity for the participant to complete.</li>
          <li>Providing more research context throughout the participant journey, including personalizing research returns on the data they provided. </li>
          <li>Forms that are clearer and faster to complete.</li>
          <li>Tracking for biosamples from kits, collection, to biobank and DNA processing.</li>
          <li>Driving participation through tangible rewards.</li>
          <li>Activities that collect participant life data that could be engaging, support longterm collection, and require little effort from participants. </li>
        </ul>

        <p>Last, we proposed a new portal structure and design that put user experience first. We set out to test, gather feedback, and conduct research that informed a portal redesign focused on ease of use, accessibility, and a strategy to return value to participants and increase engagement. Through rounds of testing, stakeholder agreement, and technical and program collaboration, we developed designs and a roadmap to prioritize new features and incorporate our vision into the participant portal.</p>

        <p>The new design introduced focus on the next activity requiring participant attention. With meaningful redundancies built in so that participants can choose and take the path that fits their unique needs, both in terms of their program journey and how they navigate through the portal. In addition to structural recommendations, we proposed look and feel updates that improved usability and reinforced styling consistency throughout the experience, including colors, buttons, and typography.</p>

        <p>The redesign afforded our team the opportunity to propose our vision for participation in the future. While collaborating on several initiatives over time, our research and findings pointed to some key features that could improve participant engagement.</p>

        <img src="/images/aou/09_ia.jpg" alt="proposed information architecture designs" />

      </div>
      <div className="caseStudySection">
        <h2>Improvements</h2>
        <p>As a team who came to understand the nuances of the participant journey and came to care deeply for the program's participants, there is more that we wanted to provide for participants.</p>

        <h3>Looking forward to a future for medical research that engages the participant.</h3>
        <p>If medical research programs aim to prioritize participant enrollment and retention, a digital experience for participants should:</p>
        <ul>
          <li>Provide participants with more transparency and agency around the data they provide for research.</li>
          <li>Acknowledge participant contribution with choice-focused return of value framework to encourage participation and involvement in the program community.</li>
          <li>Provide participants with more connections to research using program data.</li>
          <li>Personalize the participant journey and research returns based on the data they provide.</li>
          <li>Support participant decision-making for difficult topics while reducing condescension or coercion in messaging.</li>
          <li>Prioritize optimal data collection for ease of use, readability, and comprehension, which will also support providing quality, clean data for researchers to use.</li>
        </ul>
      </div>

      <div className="caseStudySection">
        <h2>Challenges & Takeaways</h2>
        <p>The <i>All of Us</i> Research Program is an ambitious research effort. It consists of many stakeholders and funded partner organizations working together from different areas of expertise. There is no one process to rule all. While supporting the program’s needs and advocating for participants, we continue to improve our processes and adjust for all situations as the program grows and evolves.</p>

        <h4>Participants come from diverse backgrounds and have different needs.</h4>
        <p>Understanding participants is critical to designing for a flexible program that addresses varied circumstances and meets participants where they are.</p>

        <h4>Different teams have different backgrounds, priorities, and responsibilities. Program goals, technical constraints, policy requirements, and participant needs are not always aligned.</h4>
        <p>As designers, we must lean on design approaches and champion their impact on the user experience. We needed to drive conversations by showing designs to support informed decision-making with the program that highlight what is best for the participant. And sometimes, we must be ready to swiftly develop alternative solutions across barriers.</p>

        <h4>Program decisions are sometimes made prematurely, without fully considering implementation and user experience consequences.</h4>
        <p>We learned to push our way into projects earlier and get involved with the smaller decision-making teams. We advocated for the participant user experience and crafted flexible solutions that accommodate less-than-ideal situations.</p>

        <h4>Different teams and situations call for different methods of design and communication.</h4>
        <p>Visual designs couldn't support all conversations. It's important to identify the right kind of delivery and level of detail, whether documentation, specs, requirements, or a bullet list.</p>

      </div>

      <div className="caseStudySection">
        <h2>Results</h2>
        <p>Impacting 750k (and growing) registered participants through program-wide design, UX leadership, guidance, and coordination between research groups and program offices, GoInvo has helped to:</p>

        <ol>
          <li>Deliver new and improved experiences for participants to contribute health data through surveys, digital health connections, and biosample donation.</li>
          <li>Provide engaging insights to share with participants what the program is learning from their contributions.</li>
          <li>Guide design and recommend during initiative conception and requirements.</li>
          <li>Developed a visual asset and illustration library and standard that is used across the program for digital and print materials.</li>
          <li>Provide support on implementation and development.</li>
        </ol>
      </div>

      <div className="case-study-section" id="references">
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
