import React from 'react'
//import MyImage from '../../components/myImage.js'
import Link from 'next/link'
import Image from 'next/image'
import ProjectLayout from '../../components/project-layout'

const Page = () => (
  <ProjectLayout
    id="diabetes-treatment-tools">
    <div className="container">
        <p>While at GoInvo, I get to work on very interesting and impactful projects, where I learn a lot about how to approach health design. While I am not able to show the work we did for this project, I wanted to share a bit about what I learned. Our goal was to study the product they were piloting, improve usability, display data to support clinician thinking and decision-making, and concept and build upon new functions to flexibly support both hospital and clinic-sized operations. The project occurred in two phases, some time apart. In the first round, we focused mainly on insulin titration recommendations, intervention support, clinical decision support, administrative management, and a future vision with more patient engagement and patient-reported data. In the second portion of the project, we expanded to include additional treatment for diabetes beyond insulin such as oral medication as well as alternative therapies such as nutrition or exercise.</p>

        <h2>Background</h2>
        <p>Diabetes treatment and insulin titration for dosages are typically arrived at using paper-based sliding scales, chasing blood glucose levels, leading to a roller coaster of unstable blood sugar levels for patients with diabetes, complicating co-morbidities or causing hyper- or hypoglycemia, potentially permanently debilitating or even fatal conditions.</p>
        <p>It's no secret that looking at a patient's history of readings and life measurements pave the path for personalized medicine. Which is how it should be, because medical care is not one size fits all. We might be able take those readings, patient-reported outcomes, and measurements from everyday life, and then deliver accurate treatment recommendations, which the patient's provider could then use to offer care tailored to that person and their specific needs.</p>

        <div class="case-study-section">
          <h2>Process</h2>
          <h4></h4>
          <p>To strengthen our understanding of diabetes medication management, we investigated the industry competitive landscape, mapping where the product currently stood and where they aimed to go, looking at key features and intended audience. Many patient-focused solutions acted mainly as data-collection hubs and weren’t able to provide recommendations to the patient beyond a visual history of self-submitted data. Clinician-focused products were visually cluttered and didn't offer providers human-friendly handouts to give to their patients. Products that did bring patients together with a health professional were mainly communication tools that didn't handle clinical data or recommendations beyond setting and meeting goals.</p>
          <p>To dig deep into the provider decision-making process, we interviewed certified diabetes educators (CDEs), clinicians, and nurses, some of whom were piloting the software with their patients at the time. We sought to understand their workflow when providing in-person and remote care, what they take into consideration when meeting with patients and prescribing treatments. </p>
        </div>

        <div class="case-study-section">
          <h2>Solution</h2>
          <h4></h4>
          <p>Our goal was to improve usability, display data to support clinician thinking, and concept and build upon new functions to flexibly support hospital/clinic organization and administration.</p>

          <h4>Patient in the driver’s seat</h4>
          <p>The focus should be on the patient, their data, goals, and personal preferences for meeting those goals. Every patient is different and reacts to treatment options in different ways. Health IT tools need to support providers in getting to know their patients and give them recommendations personalized down to how much they are able to spend, what side effects they prefer to avoid, and what other health goals they might have, in addition to accurate dosages.</p>

          <h4>Multiple modalities for contact</h4>
          <p>To keep blood glucose levels stable and to stay on top of accurate treatment recommendation, care management would require multiple check-ins between patient and provider in short periods of time, rather than getting an initial dose recommendation at the doctor’s office and leaving it at that. Time between patient updates ranged from a few scant days to several weeks, depending on where the patient was in their care journey. Asking the patient to come in for each and every one only added stress and strain on an already hectic schedule, so providers would need to contact their patients across a variety of methods to ask them a question or deliver new care recommendations. Most of the time, issues with care plan adherence could be attributed to circumstances in the patient’s life that could have been found out in a quick phone call.</p>

          <h4>Clarity of data</h4>
          <p>In a hospital setting, there isn’t always ample time to understand a patient’s history and how they react to different dosages. There is also often little to no transition from hospital to home, meaning that as soon as a patient got home, their blood glucose could destabilize all over again. While in the outpatient setting, there is more time to give a patient proper attention, and the provider is typically processing more patient history than they would be in a hospital. However without the proper tools, and insight into the data, outpatient providers may not be able to help their patients as much as is needed. Clear data telling a story supported quicker and more informed decision-making.</p>
          <p>Put pertinent data at a provider's fingertips: average readings per day, average daily blood glucose value, last A1c test along with current estimated A1c, current treatment recommendation, and the daily blood glucose levels over the course of the current update period (anywhere from a few days to several weeks). With the help of connected blood glucose monitors, smart insulin pens, smart pillboxes, and patient-reported life data, optimal dose recommendations can be calculated, vetted by the provider, and lead to more stable blood sugar levels over longer periods of time, making it possible for patients to get off insulin for good.</p>

          <h4>Bringing more therapies into the mix</h4>
          <p>Once patients are off of insulin, they may need different (less risky) forms of treatment going forward. The transition from insulin to non-insulin treatments would be a seamless, inseparable part of the continuing care plan.</p>
          <p>Opening the prescription possibilities beyond insulin meant more than ever that we would need to address drug-drug interactions, contraindications, and patient history, focused mainly on conditions and drugs that interact with diabetes treatments. In an ideal world, where digital systems can talk to one another, that data could be pulled directly from the patient’s profile in the EHR, but manual input remained a necessary alternative. Once entered, the treatment recommendation tool would remember and use the information to curate therapy options for that patient and prescribe only what was safe, with the oversight of a provider of course.</p>
          <p>In addition to medical history, a patient's personal preferences and life goals would be taken into account. Providers would be encouraged to discuss with their patients what their goals are, which in turn promotes patient engagement and treatment adherence. Not all patients’ journeys will be the same; some would want to take a vigorous approach to bringing their blood sugars to a manageable level, while others may prefer the slow and steady approach, which is more effective for beahvior change. People find different side effects to be intolerable, and while others will want to align side effects with their life goals (some medications have the ability to control weight or reduce blood pressure).</p>
          <p>In addition to insulin, non-insulin medications, and combination treatments, we saw an opportunity to prescribe non-drug therapies such as regular exercise or consultation with a dietician to work on a healthy diet. Based on individual preferences and goals, lifestyle and behavioral changes may be better suited to helping patients keep their diabetes under control in the long run more than dealing with medication, treatment schedules, and potential side effects.</p>
          <p>With more treatment options to choose from, complex therapy regimens would be inevitable. Having a sheet printed or emailed to patients saved the provider time in typing it all up manually, and includes reminders of the patient’s goals that would promote adherence to the treatment options. Sometimes all you need is a reminder of what you’re working towards to stick to your care plan.</p>
        </div>
        <div class="case-study-section">
          <h2>Improvements</h2>
          <p>Given more time on either phases of the project, it would have been beneficial to have spoken to patients one on one about their experiences with living with diabetes and building treatment plans with their providers. First hand accounts are invaluable compared to anecdotal evidence conveyed by providers. While many providers are empathetic and observant, there is often a bias involved and missing pieces to the puzzle. Understanding the patient's point of view would have been key to building a patient-focused care tool.</p>
          <p>Given more time and feasibility for production, a patient-facing app would help both with data collection tool as well as communicating ongoing treatment adjustments.</p>
        </div>

    </div>
  </ProjectLayout>
)

export default Page
