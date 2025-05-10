import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProjectLayout from '../../components/project-layout'

const Page = () => (
  <ProjectLayout
    id="living-health-lab">
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
          <h3></h3>
          <p>Chronic diseases like diabetes, hypertension, and heart disease affect millions of people worldwide, requiring continuous monitoring, lifestyle adjustments, and timely interventions. Traditional healthcare relies on periodic visits that primarily address the symptoms, rather than underlying causes. Patients often struggle with adhering to medication, diet, and exercise plans, increasing the risk of complications. With over 350,000 digital health applications available, patients face three main challenges with symptom tracking solutions:</p>
          <ol>
            <li><strong>High effort, low reward:</strong> Manual logging is repetitive and burdensome, leading to inconsistent use and incomplete data.</li>
            <li><strong>Data without insight:</strong> Users lack actionable feedback from recorded symptoms, missing clear next steps.</li>
            <li><strong>Lacking, or opaque AI:</strong> Current AI-driven tools either offer generic assessments, if there's assisted intelligence at all.</li>
          </ol>
          <p>To support self-managed care, an effective solution must minimize effort, maximize clarity, and build trust, offering a seamless experience for tracking symptoms and guiding users toward better health decisions.</p>
        </div>

        <div className="case-study-section">
          <h2>Background</h2>
          <div className="flex-container">
            <div className="one-col">
            <p>Building on prior work from the Living Health Lab, we aim to turn the well-researched manual process into a smart health companion that helps patients take their health into their own hands. Leveraging AI, machine learning, and natural language processing, this digital tool transforms free-form journals, voice entries, and quick logging into a structured health profile—delivering real-time insights, personalized care plans, and an investigation-driven “Hunch Engine” that helps users uncover the root causes of their symptoms, empowering patients to take control of their own health, improve health outcomes, and reduce hospital visits.</p>
            </div>
            <div className="one-col">
              <img src="/images/lhl/living-health-lab-workbook.jpg" alt="living health lab workbook" />
            </div>
          </div>
          
          <ul>
            <li><strong>Personalized health insights</strong> based on medical history, connected devices, and user-provided data.</li>
            <li><strong>Predictive analytics</strong> that helps patients identify triggers, and investigate symptoms, with alerts for potential risks based on trends in health data and environmental triggers.</li>
            <li><strong>Care management</strong> education and tools with tailored plans with automated reminders and behavioral recommendations. </li>
            <li><strong>Health literacy</strong> tools to help patients communicate with providers, encouraging engagement and agency in their own health.</li>
            <li><strong>Patient data is private.</strong> Prioritizing user privacy through encryption and regulatory adherence, while ensuring the patient owns and controls their data.</li>
          </ul>

          <div className="flex-container">
            <div className="one-3-col">
              <img src="/images/lhl/start_1.png" alt="start" className="max-ht" />
            </div>
            <div className="one-3-col">
              <img src="/images/lhl/home.png" alt="home" className="max-ht" />
            </div>
            <div className="one-3-col">
              <img src="/images/lhl/symptom_add.png" alt="home" className="max-ht" />
            </div>
          </div>
        </div>

        <div className="case-study-section">
          <h2>Process</h2>
          <h3>Research and Discovery</h3>
          <p>From GoInvo’s Living Health Lab concept and similar digital tools and services,  I mapped out key workflows and necessary features to create a digital format that could live in a patient’s pocket.</p>
          <ol>
            <li>Symptom & trigger logging</li>
            <li>Care plan management</li>
            <li>Provider report generation</li>
          </ol>
          <p>By evaluating existing tools (Ada, WebMD, Symptomate, Bearable, My Pain Diary), we can review what works well and what doesn't to better meet patient needs. Our goals are to ensure accuracy and safety, ease of use, and flexibility in symptom tracking to encourage active patient engagement in healthcare to better improve outcomes and encourage active participation in their healthcare journey.</p>
          <h3>Pain points to reduce</h3>
          <p><strong>Excessive steps:</strong> Most apps require 5–7 taps per log. </p>
          <p><strong>Limited features:</strong> Many users end up using multiple apps to track their health, get a symptom assessment, make a care plan, or learn about their health and next steps.</p>
          <p><strong>Fragmented insights:</strong> Analytics live in separate screens, disconnected from logging.</p>
          <p><strong>Opaque AI:</strong> Privacy policies buried in settings menus.</p>
          <p><strong>Lacking AI:</strong> Many apps and services lack the ability to provide insights in the first place. Some “forget” context users find important, such as their health history. Patients are already making connections in their health, and want to be able to nudge the model to help them investigate further.</p>
          <p><strong>Privacy and data security:</strong> Users are opted in to share their data by default, when they may not feel comfortable doing so. Users are more skeptical than ever about sharing their data.</p>
          <h3>Lessons Learned from user testing</h3>
          
          <div className="flex-container flex-reverse">
            <div className="one-col">
              <img src="/images/lhl/user-testing-table.png" alt="table with user testing results" />
              <p className="caption">Tested user tasks against traps and tenets model</p>
            </div>
            <div className="one-col">
              <h4>1. Trust & Transparency</h4>
              <ul className="num-margin">
                <li>Users wanted clear privacy language and data-handling controls.</li>
                <li>Common sense, plain language privacy policy and data use agreements.</li>
              </ul>
            </div>
          </div>
          
          <h4>2. Workflow Simplification, Minimal Effort Data Entry</h4>
          <ul className="num-margin">
            <li>Users were disoriented by the architecture—information grouped in ways that didn’t match mental models.</li>
            <li>Consolidated architecture, and simpler workflows would reduce cognitive effort</li>
            <li>Allowing discrete data collection from varying tasks patients may want to complete would reduce manual effort</li>
          </ul>
          <h4>3. Multi-modality & NLP to take the unstructured to structured data</h4>
          <ul className="num-margin">
            <li>Offer multimodal entry (toggles, voice-to-text journaling, passive import), for improved accessibility and to meet patients where they’re at</li>
            <li>Free-form journals parsed by NLP to extract symptoms, triggers, mood.</li>
            <li>Voice chat fallback for accessibility</li>
          </ul>
          <h4>4. Deep & actionable insights</h4>
          <ul className="num-margin">
            <li>Users want to “build an investigation”, with minimal effort, around a symptom, not just log it.</li>
            <li>Add a “Hunch Engine”—a mini-wizard that correlates logged triggers, environmental data (e.g. weather), and behaviors to suggest next investigative steps.</li>
          </ul>
          <h4>5. Consolidating Care-Plan Integration & Reporting</h4>
          <ul className="num-margin">
            <li>Provider reports aligned with mental models better than disconnected “reports” screens.</li>
            <li>Merge care-plan tasks, logging, and provider-report generation into a single flow: complete a symptom log → auto-generate shareable snapshot.</li>
          </ul>
        </div>

        <div className="case-study-section">
          <h2>Solution</h2>
          <div className="flex-container">
            <div className="one-col">
              <h4>Adaptive Symptom Tracking</h4>
              <p>The service will be able to guide users with simple interactions or conversational UI through logging symptoms. Follow-up questions, pre-filled templates, or context-aware suggestions tailored to the user's previous inputs will reduce friction and minimize repetitive data entry.</p>
              <p>Symptom assessments will provide confidence levels to build trust with users.</p>
            </div>
            <div className="one-col">
              <div className="flex-container">
                <div className="one-col">
                  <img src="/images/lhl/journal_entered.png" alt="journal" className="max-ht" />
                </div>
                <div className="one-col">
                  <img src="/images/lhl/unscructure-to-structured.png" alt="structured data derived from unstructured data" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-container">
            <div className="one-col">
              <h4>Personalized, actionable insights & care planning</h4>
              <p>Predictive analytics can be applied to health profiles that are built over time, learning from user data to identify trends and provide timely alerts.</p>
              <p>Provide recommendations based on current symptoms and historical trends. For example, guided mindfulness sessions or scheduled breaks when detecting increased stress, or suggesting follow up with a healthcare provider. (Apply caution regarding medical advice.)</p>
              <p>Allow users to set personalized health goals and use AI to generate adaptive care plan with step-by-step recommendations, educational content, and progress trackers to support users in following their care plan with incremental behavioral adjustments.</p>
              <p>Recommendations and assessments would come with confidence levels and sources linking to related studies or clinically validated articles.</p>
            </div>
            <div className="one-col col-center">
              <img src="/images/lhl/careplan.png" alt="journal" className="max-ht" />
            </div>
          </div>
          
          <h4>Robust Data Security and Privacy Controls</h4>
          <p>Allow users to control which data is shared and with whom (opt-in). Clearly communicate data handling practices to build trust. At baseline, data is private and localized, while data for analysis purposes is de-identified.</p>
          <p>Ensure all data, both at rest and in transit, is encrypted. Offer an anonymous mode for users tracking sensitive or stigmatized conditions.</p>
          <p>Use plain language to communicate transparent data policies and educate users about app data use, user data rights, and security measures in place.</p>
          <div className="frame-container lhl-frame">
            <iframe  
              id="lhl-figma"
              width="100%"
              height="917px"
              src="https://embed.figma.com/proto/AibfY6qEN3Emj5uAHB9Zcw/Jen-stuff?page-id=0%3A1&node-id=1-336&viewport=-203%2C-148%2C0.17&scaling=scale-down&content-scaling=fixed&embed-host=share" 
            ></iframe>
          </div>
        </div>

    </div>
  </ProjectLayout>
)

export default Page
