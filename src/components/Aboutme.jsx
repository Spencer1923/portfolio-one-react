import React from 'react'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
    return (
        <section id="about-me" className='about-me'>
            <div className='about-me-wrapper'>
                <SectionIntroduction>ABOUT ME</SectionIntroduction>
                <div className='about-me-section-content'>
                    <p className='about-me-paragraph'>I’m passionate about continuously challenging myself and learning new technologies to create innovative, user-centric web applications.</p>
                    <p className='about-me-paragraph'>I'm majoring in <strong>Digital Media</strong> at <strong>York University </strong> and have a background of two years of Computer Science studies.</p>
                    <p className='about-me-paragraph'> I specialize in Java, JavaScript, React, HTML, and CSS.</p>
                </div>
                <div className='about-me-icons'>
                   <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-java"></i>
                    <i className="fa-brands fa-node-js"></i>
                </div>
            </div>
        </section>
    )
}

//" majoring in Digital Media at York U and have a background of two years of Computer Science studies. I specialize in Java, JavaScript, React, HTML, and CSS. 