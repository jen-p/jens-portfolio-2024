import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectLayout from '../../components/project-layout'

const Page = () => (
  <ProjectLayout
    id="diabetes-treatment-tools">
    <div className="container">
      <div className="projectStats">
          <div className="stat">
            <p className="statLabel">Role</p>
            <p className="statValue">Design</p>
          </div>

          <div className="stat">
            <p className="statLabel">Prior work</p>
            <p className="statValue"><a href="https://goinvo.com/vision/living-health-lab/">Living Health Lab</a></p>
          </div>
        </div>

        <div className="case-study-section">
          <h2>Problem statement</h2>
          <h4></h4>
          <p>Chronic diseases such as diabetes, hypertension, and heart disease affect millions of people worldwide, requiring continuous monitoring, lifestyle adjustments, and timely interventions. Traditional healthcare relies on periodic visits that primarily treat the symptoms and not the causes, leading to gaps in monitoring and delayed interventions. Patients struggle with adherence to medication schedules, diet plans, and exercise regimens, increasing the risk of complications. Managing chronic conditions can be overwhelming for patients, especially when there are over 350,000 digital health applications to choose from.</p>
          <p>Patients face three core challenges with existing symptom tracking solutions:</p>
          <ol>
            <li><strong>High effort, low reward:</strong> Manual logging is repetitive and burdensome, leading to inconsistent use and incomplete data.</li>
            <li><strong>Data without insight:</strong> Even when users diligently record symptoms, they rarely receive contextualized, actionable feedback that translates raw numbers into clear next steps.</li>
            <li><strong>Lacking, or opaque AI:</strong> Current AI-driven tools either offer generic assessments or hide their data-use practices behind dense privacy policies—eroding trust and leaving users unsure how their information is handled or how it informs recommendations.</li>
          </ol>
          <p>To truly support self-managed care, a service that minimizes effort, maximizes clarity, and builds transparent trust is critical —turning daily symptom capture into a seamless, enlightening experience that guides users toward better health decisions.</p>
        </div>

        <div className="case-study-section">
          <h2>Background</h2>
          <p>Building off of our previous work with the Living Health Lab, we wanted to turn the well-researched manual process into a low effort, smart, health companion that helps patients take their health into their own hands. Leveraging AI, machine learning, and natural language processing, this digital tool transforms free-form journals, voice entries, and quick logging into a structured health profile—delivering real-time insights, personalized care plans, and an investigation-driven “Hunch Engine” that helps users uncover the root causes of their symptoms. Living Health Lab provides a comprehensive digital health assistant that empowers patients to take control of their own health, improve health outcomes, and reduce hospital visits.</p>
          <ul>
            <li><strong>Personalized health insights:</strong> Based on medical records/history, passively collected data through connected devices, and user-provided data.</li>
            <li><strong>Predictive analytics:</strong> Structure to help patients track symptoms, identify triggers, and investigate when a condition is difficult to diagnose. Alerts for potential health risks based on trends in health data and environmental triggers.</li>
            <li><strong>Care management:</strong> A comprehensive care plan with automated reminders for medications, dietary tracking, and exercise plans tailored to individual needs, with behavioral recommendations to encourage prioritizing health and wellbeing.</li>
            <li><strong>Health literacy:</strong> Education and tools to help patients communicate with their health provider about their condition(s) and encourage engagement and agency in their own health.</li>
            <li><strong>Care support</strong> Tools for communication with healthcare providers for remote consultations and intervention, and recommendations for safe, at-home testing or collection kits to send to labs for analysis when needed.</li>
            <li><strong>Patient data is private:</strong> Prioritizing data security and user privacy through encryption and regulatory adherence, and ensuring data will be owned and controlled by the patient.</li>
          </ul>
          





        </div>

        <div className="case-study-section">
          <h2>Process</h2>
          <h4>Research and Findings</h4>
          <p></p>
          <h4>Lessons Learned</h4>
          <p></p>
        </div>

        <div className="case-study-section">
          <h2>Solution</h2>
          <h4></h4>
          <p></p>
        </div>

    </div>
  </ProjectLayout>
)

export default Page
