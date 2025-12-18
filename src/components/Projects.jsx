import React from 'react'
import SectionIntroduction from './SectionIntroduction'
import missionList from '../assets/mission-list-screenshot.jpg'
import transcribe from '../assets/transcribe.jpg'
import nasa from '../assets/nasa.jpg'
import training from '../assets/training-app.jpg'
import portfolio from '../assets/portfolio.jpg'
import guess from '../assets/guess-it.jpg'
import weather from '../assets/weather-app.jpg'


import ImgOverlay from './ImgOverlay'

export default function Projects() {
  return (
    <section id="projects">
      <div className='projects-wrapper'>
        <SectionIntroduction >PROJECTS</SectionIntroduction>
        <div className='projects-section-content'>

          <ImgOverlay
            imgSrc={weather}
            title={"Weather Web App"}
            projectLink={'https://datt3074weatherwebapp.netlify.app'}
            githubLink={'https://github.com/Spencer1923/Immersive-Meteorological-Web-App'}>
            Immersive Weather Web App using JavaScript and Max 9.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={portfolio}
            title={"Portfolio"}
            projectLink={'https://spencer-samra.netlify.app'}
            githubLink={'https://github.com/Spencer1923/portfolio-one-react.git'}>
            Mobile-first portfolio using React.js.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={guess}
            title={"Guess it"}
            projectLink={'https://drive.google.com/drive/folders/10BygrOvwYWA8K3GatF69hsKFHPEEpjjK?usp=share_link'}
            githubLink={'https://github.com/Spencer1923/Guess-It'}>
            Number Guessing Game using Java for Android.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={missionList}
            title={"Mission List"}
            projectLink={'https://reactjs-mission-list.netlify.app'}
            githubLink={'https://github.com/Spencer1923/reactJS-mission-list'}>
            Full stack responsive CRUD Mission List web application, built using React JS.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={transcribe}
            title={"Transcribe App"}
            projectLink={'https://transcribe-web-app.netlify.app'}
            githubLink={'https://github.com/Spencer1923/transcribe-app'}>
            Speech-to-text transcription & translation, uses React JS & Tailwind CSS.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={nasa}
            title={"NASA App"}
            projectLink={'https://nasa-app-reactjs.netlify.app'}
            githubLink={'https://github.com/Spencer1923/react-NASA-data-app/tree/main'}>
            NASA data web app built with React JS, Tailwind CSS and NASA API.
          </ImgOverlay>

          <ImgOverlay
            imgSrc={training}
            title={"Training App"}
            projectLink={'https://training-plan-app.netlify.app'}
            githubLink={'https://github.com/Spencer1923/training-app'}>
            Responsive workout generator with React.js & Tailwind CSS.
          </ImgOverlay>

        </div>
      </div>
    </section>
  )
}