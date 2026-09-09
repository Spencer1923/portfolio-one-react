import React from 'react'
import useInView from '../useInView'
import SectionIntroduction from './SectionIntroduction'
import missionList from '../assets/mission-list-screenshot.jpg'
import transcribe from '../assets/transcribe.jpg'
import portfolio from '../assets/portfolio.jpg'
import guess from '../assets/guess-it.jpg'
import weather from '../assets/weather-app.jpg'
import falseProphecy from '../assets/false-prophecy.jpg'
import dreamzDirect from '../assets/dreamz-direct.jpg'




import ImgOverlay from './ImgOverlay'

export default function Projects() {
  const [ref, isVisible] = useInView()
  return (
   <section id="projects" ref={ref} className={isVisible ? 'fade-in' : 'fade-out'}>
      <div className='projects-wrapper'>
        <SectionIntroduction >PROJECTS</SectionIntroduction>
        <div className='projects-section-content'>

          <ImgOverlay
            imgSrc={falseProphecy}
            title={"False Prophecy"}
            tags={["JavaScript", "face-api.js", "TensorFlow.js"]}
            projectLink={'https://false-prophecy.netlify.app/main_menu.html'}
            githubLink={'https://github.com/Spencer1923/Identity-Processing'}>
            Emotion detection web-app using JavaScript and face-api.js (TensorFlow.js).
          </ImgOverlay>

          <ImgOverlay
            imgSrc={weather}
            title={"Weather Web App"}
            tags={["JavaScript", "Open Weather API", "Max 9"]}
            projectLink={'https://datt3074weatherwebapp.netlify.app'}
            githubLink={'https://github.com/Spencer1923/Immersive-Meteorological-Web-App'}>
            Immersive Weather Web App using JavaScript and Max 9.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={guess}
            title={"Guess it"}
            tags={["Java", "Android"]}
            projectLink={'https://drive.google.com/drive/folders/10BygrOvwYWA8K3GatF69hsKFHPEEpjjK?usp=share_link'}
            githubLink={'https://github.com/Spencer1923/Guess-It'}>
            Number Guessing Game using Java for Android.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={portfolio}
            title={"Portfolio"}
            tags={["React"]}
            projectLink={'https://spencer-samra.netlify.app'}
            githubLink={'https://github.com/Spencer1923/portfolio-one-react.git'}>
            Mobile-first portfolio using React.js.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={dreamzDirect}
            title={"Web Page for Client"}
            tags={["HTML", "CSS", "JavaScript", "SEO"]}
            projectLink={'https://dreamzdirectsolutions.com'}
            githubLink={'https://github.com/Spencer1923'}>
            Mobile first business page for client prioritizing SEO and CTAs.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={missionList}
            title={"Mission List"}
            tags={["React", "Full Stack", "CRUD"]}
            projectLink={'https://reactjs-mission-list.netlify.app'}
            githubLink={'https://github.com/Spencer1923/reactJS-mission-list'}>
            Full stack responsive CRUD Mission List web application, built using React JS.
          </ImgOverlay>
          
{      <ImgOverlay
            imgSrc={transcribe}
            title={"Transcribe App"}
            tags={["React", "Tailwind CSS"]}
            projectLink={'https://transcribe-web-app.netlify.app'}
            githubLink={'https://github.com/Spencer1923/transcribe-app'}>
            Speech-to-text transcription & translation, uses React JS & Tailwind CSS.
          </ImgOverlay>}

        </div>
      </div>
    </section>
  )
}