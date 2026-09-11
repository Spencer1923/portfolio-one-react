import React from 'react'
import SectionIntroduction from './SectionIntroduction'
import useInView from '../useInView'

export default function Aboutme() {
    const [ref, isVisible] = useInView()
    return (
       <section id="about-me" ref={ref} className={`about-me ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className='about-me-wrapper'>
                <SectionIntroduction>ABOUT ME</SectionIntroduction>
                <div className='about-me-section-content'>
                    <p className='about-me-paragraph'>I'm a recent <strong>Digital Media</strong> graduate from <strong> Lassonde School of Enineering</strong> at <strong>York University </strong> and have a background of two years of Computer Science studies.</p>
                    <p className='about-me-paragraph'>I’m looking for a role where I can contribute too while also gaining valuable experience and further expanding my skillset.</p>
                    <p className='about-me-paragraph'>I specialize in Java, JavaScript, React, HTML, CSS and I continuously challenge myself by learning new technologies to create innovative web applications.</p>
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