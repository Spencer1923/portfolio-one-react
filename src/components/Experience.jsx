import React from 'react'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id="experience">
      <div className='experience-wrapper'>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className='experience-section-content'>
          <ListEntry title={"Code Haven Web Solutions"} date={"August 2024 - Present"}>
            <li>Designed and developed custom, responsive websites for small businesses, prioritizing performance, SEO, and mobile usability
              using clean HTML, CSS, and JavaScript.</li>
            <li>Managed full project lifecycle, from client communication and iterative revisions to post-launch support, ensuring tailored solutions
                and seamless user experiences.</li>
          </ListEntry>

          <ListEntry title={"Freelance Work"} date={"August 2023 - Present"}>
            <li>Building, designing & improving websites/applications.</li>
          </ListEntry>

           <ListEntry title={"York University"} date={"September 2021 - Present"}>
            <li>Completed two years of Computer Science and now majoring in Digital Media.</li>
          </ListEntry>
        </div>

      </div>
    </section>
  )
}