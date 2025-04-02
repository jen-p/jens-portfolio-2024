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
        
        <div className="case-study-section">
          <h2>Background</h2>

          <h4>Prior authorization is a frequent reality for cancer patients and their families.</h4>
          <p>Health insurers use prior authorizations to review and control the delivery, payments, and reimbursements to ensure high-quality standards in treatment and therapy delivery standards.<sup><a href="#references">1</a></sup> When a provider determines a line of treatment for their patient, they or their administrative staff submit a request through the patient’s insurer. The treatment case is then reviewed for eligibility and coverage before a decision is made, whether approval, adjustment, or denial.</p> 

          <h4>Burdensome for experts who specialize in prior authorization.</h4>
          <p>Some insurers often use services that specialize in processing prior authorization requests. These organizations employ clinical and prescribing experts to review cases. This process involves reviewing patient and clinical documents in great detail, combing through piles of unstructured data (some records may be missing or incomplete), communicating back and forth with admin staff, and sometimes requiring a secondary review for more complex cases.</p>

          <h4>Increased burden and delays mean anxiety, stress, and distrust for patients.</h4>
          <p>This process places a significant burden on providers, administrative staff, and the reviewers themselves. The requirements, administration, and review process can cause treatment delays of up to two weeks, increasing stress, anxiety, and distrust in the healthcare system for patients and their families.<sup><a href="#references">2</a></sup> Delays and denials in care are particularly problematic for patients with cancer, who often need urgent treatment or symptom management and are left waiting while their condition worsens.<sup><a href="#references">2</a></sup></p>

          <h4>Reduce friction and increase analytical efficiency.</h4>
          <p>Our goal was to streamline the case review process for reviewers. This improvement will not only make their work more manageable but will also benefit patients by reducing wait times. Additionally, it will lessen the follow-up administrative tasks required from both providers and staff. With natural language processing to derive structured data from the unstructured records sent by providers and a clear information hierarchy to provide the right information at the right time, reviewers could spend less time hunting and manually recording a reference. Different panels allow the interface to be flexible and present the relevant information the context for the reviewer is in.</p>
        </div>

        <div className="case-study-section">
          <h2>Process</h2>
          <h4>Background knowledge of oncological treatments is essential</h4>
          <p>We needed to build our knowledge of cancer treatments to better understand what case reviewers look for in their reviews. We worked with clinical reviewers to learn about their process and pain points that helped us focus on where we could make the most impact. To better understand and design for real-life cases and scenarios, we conducted research into treatments for different cancers, therapy lines, and the patient journey. We work with real data so that solutions meet the real needs of the people impacted by this process.</p>

          <h4>Detailed review and interviews with case reviewers</h4>
          <p>We reviewed the software in detail, giving us a starting point for the fundamental problem areas. Interviews with reviewers at various steps of the prior authorization process and different types of cases gave our team a deeper understanding of how they work and identify pain points. We continued interviews throughout the design process to validate the concepts, ensuring that the solutions met the needs of reviewers and staff at each stage.</p>

          <h4>A complex process further complicated by a dense UI</h4>
          <p>Tabular and gridlike data weighed down the reviewer system with little information hierarchy, and it could be challenging to find a small detail amongst a sea of patient data points.Performing most actions takes a lot of navigating back and forth, clicking, opening windows and pop-ups, which makes reviewing information side by side difficult without having multiple browser windows open. What should be simple processes take a lot of steps and clicks. An organized information structure using a clear hierarchy to highlight key information, along with the ability to review information in flexible panels designed to present the right information for the context of the stage of review.</p>

          <h4>Disparate documentation and detective work</h4>
          <p>To fully understand and make an informed decision on the protocol requested by the provider, reviewers needed to understand the complete picture of the patient over time, the progression of their cancer, previous treatments, side effects they’ve experienced, etc. Reviewers hunt for this information through many different sources, verifying information (provider notes can sometimes be outdated in records), manually recording the information to build a patient history for reference during their review, and redoing all of this for each round and request. If documents could be automatically identified and classified, structured data may be derived from the documentation so that reviewers don't need to wait for admin staff to process or have to hunt and search for information.</p>

          <h4>Note capture</h4>
          <p>Notes and contact queries are located at multiple points throughout the review, which may also contain important information needed to conduct the review. As reviewers conduct their analysis, while keeping track of patient information, they manually capture notes on their review, which they enter at the end of the process when they’re ready to make their determination. However, they are unable to view or record notes without losing the context of the protocol or patient record or fearing they might lose the notes they have already captured during their review. Giving reviewers a convenient way to take notes at any point during their review was essential without disrupting their focus on the content. Reliable note saving was also essential, enabling reviewers to quickly return to their previous point if interrupted.</p>

          <img src="/images/priorauth/pa-caseActionNote.jpg" alt="Displaying the case action tab with notes open and filled" />
        
          <h4>Smarter, organized queues</h4>
          <p>The reviewer's queue is straightforward, but there was still room for improvement and better efficiency. We reorganized information in the queue to help with readability and scanability. In their system, reviewers were limited to their own queue which did not refresh, leading staff to creative workarounds to be able to share work, offer assistance, and prompt a page refresh to reduce friction. We focused on these pain points with recommendations to make the queue more live with periodic refreshes when work arrives in a queue and allowing reviewers to access any case when they need to offer assistance to another colleague, with robust filters to set default views and focus on their own queue when working.</p>

          <img src="/images/priorauth/pa_Queue.jpg" alt="Case queue" />
        </div>

        <div className="case-study-section">
          <h2>Solution</h2>
          <img src="/images/priorauth/pa-caseProtocol.jpg" alt="Treatment protocol example, listing protocols for review along the left and the details of the protocol, dosing information, risks, and resources for the reviewer" />

          <h4>Patient Information Upfront</h4>
          <p>From flat, tabular information representation, we used type size and sectioning to organize patient information. The most critical information is front and center to ensure the reviewer is referring to the correct patient and condition. Because of the sheer amount of information needed for a complete case, we paid attention to what information was truly needed in what contexts. For example, *Provider contact information* is included if the reviewer needs to ask questions or reach out to confirm or locate any missing information. Additionally, *Admin information*, which previously took up a lot of space, creating distance between the patient information and contextual information needed for a review is also accessible here.</p>

          <img src="/images/priorauth/pa-caseDocumentRecord.jpg" alt="Displaying the document tab besides the patient record tab" />

          <h4>Reviewing the Protocol / Treatment Request</h4>
          <p>Protocol information is similarly up front, with more detail in an expandable drawer for a detailed review of timing and dosing, which can collapse when no longer needed. We wanted to include multi-modality to access different features. In this context, if the reviewer notices a change is necessary, they may select to *Change* or *Withdraw* the protocol, *Add protocol*, or *Modify dosing*, and the drawer will collapse and allow them to make any changes necessary in the *Actions* panel, where they would submit their recommendations of adjustments, approval, or denial.</p>

          <h4>Reviewing the Patient Record</h4>
          <p>To address the time-consuming task of sifting through patient documentation, a Natural Language Processing (NLP) model would automatically classify patient documents and extract structured data from unstructured clinical reports. The data is discretely organized into categories as a functioning patient record to make it easier to locate the right information, and users have the option to explore the record as a timeline to get a chronological view of the patient history. This greatly reduces the time and effort spent on searching for information in many separate documents.</p>
          <p>Understanding that patient records aren't always complete and NLPs aren't perfect, missing information can be entered and saved as structured data. Users can also correct information that may be incorrect. Based on the patient’s type of cancer, progression, and protocol request, we can also identify what information is required to make a safe determination on the prior authorization. Knowing that there could be cases when information may need to be updated for each round of a request for clinical safety, or information may drift or have conflicting entries, we identify which data points are in need of verification. Once verified, a reviewer can be sure that the information is correct for the following cases on this patient. </p>
        
          <h4>Reviewing the Patient Timeline</h4>
          <p>To get a clear picture of the patient and the progression of their condition, the patient record is meant to organize information as a timeline reviewers can refer to during their review and following reviews. Reviewers would no longer need to build a patient history manually. One challenge was to capture the concept of treatments over time, including active prescriptions and changes in therapy, which we indicate with the vertical strips on the side.</p>

          <img src="/images/priorauth/pa-caseTimelineActionNotes.jpg" alt="Displaying the actions tab besides the patient timeline view" />

          <h4>Determining an Action on a Case</h4>
          <p>Once a review is complete and the reviewer is ready to make their determination, the reviewer can record the decision in the actions panel. During their review, if they had made notes in the note widget/panel/capture, those notes would be recorded along with their review. This reduces the need to copy notes the reviewer had recorded on the side in the previous system.</p>

          <img src="/images/priorauth/pa-caseActionNote.jpg" alt="Displaying the case action tab with notes open and filled" />

          <h4>Automating Approvals to Save on Time and Resources</h4>
          <p>Clinical reviewers would continue to review more complex cases, while the system would take advantage of the structured data to automate determinations on cases that fell under a set of rules and guidelines set out by the organization in partnership with payers. The automation would be able to save hundreds of hours of time, effort, and resources that otherwise would be spent by the prior authorization review team, payers, providers, and hospital systems &mdash;and patients would be able to start treatment much sooner than they would have in the past.</p>
        </div>

        <div className="case-study-section">
          <h2>Key challenges and takeaways</h2>
          <ul>
            <li>With the design recommendations and supporting system, an ultimate goal of this project was for more straightforward prior authorizations to be approved automatically without the need for a detailed review, improving time to treatment and reducing overall resource burden.</li>
            <li>Technology requirements can change over time, and in the end the technology approach chosen by the team didn't support our initial designs.</li>
            <li>Working with the team on subsequent projects, we were able to help their organization streamline other parts of their process, including dosing recommendations, the provider experience of patient intake, management of providers and practices, management of clinical rules and guidelines that feed into protocol recommendations, maintenance of drug rules and guidelines for various insurers, and tools that help the organization’s staff to stay up to date on how different conditions are impacting different payers.</li>
          </ul>
        </div>

        <div className="case-study-section" id="references">
          <h2>References</h2>
          <ol>
            <li><a href="https://ascopubs.org/doi/10.1200/EDBK_100036" target="_blank noreferrer">Impact of Prior Authorization on Patient Access to Cancer Care</a></li>
            <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10585404/" target="_blank noreferrer">The Patient Experience of Prior Authorization for Cancer Care</a></li>

          </ol>
        </div>

    </div>
  </ProjectLayout>
)

export default Page
