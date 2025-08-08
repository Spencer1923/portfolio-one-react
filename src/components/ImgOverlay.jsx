import React from 'react'

export default function ImgOverlay(props) {
    const { imgSrc, title, githubLink, projectLink, children } = props
    return (
        <div className='img-overlay-img-display'>
            <img className='img-overlay-img' src={imgSrc} alt="store" />
            <div className='img-overlay-overlay'>
                <h2 className='img-overlay-overlay-header'>{title.toUpperCase()}</h2>
                <p className='img-overlay-paragraph'>
                    {children}
                </p>
                <div className='img-overlay-links'>
                    <a href={githubLink} rel="noreferrer" target="_blank" className='img-overlay-button'><i className='fa-brands fa-github img-overlay-icons'></i></a>
                    <a href={projectLink} rel="noreferrer" target="_blank" className='img-overlay-button'>Link to project &#8594;</a>
                </div>
            </div>
        </div>
    )
}
