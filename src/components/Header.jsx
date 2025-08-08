import React from 'react'

export default function Header() {
  return (
    <header className='header'>
            <h1 className='header-text'>My Portfolio</h1>
            <h1 className='header-name-text'>By Spencer Samra</h1>
            <div className='header-nav-items'>

                {/* about me user icon*/}
                <a href='#about-me' className='header-anchor'>
                    <i className='fa-solid fa-user-tie header-icons'></i>
                </a>

                {/* experience briefcase icon*/}
                <a href='#experience' className='header-anchor'>
                    <i className='fa-solid fa-briefcase header-icons'></i>
                </a>
                
                {/* projects me laptop icon*/}
                <a href='#projects' className='header-anchor'>
                    <i className="fa-regular fa-laptop-code header-icons"></i>
                </a>
            </div>
      
      {/* PlayStation-styled navigation buttons */}
      <div className='playstation-nav'>
         <a href='#top' className='playstation-nav-button'><i className="fa-solid fa-id-card"></i></a>
        <a href='#about-me' className='playstation-nav-button'><i className='fa-solid fa-user-tie header-icons'></i></a>
        <a href='#experience' className='playstation-nav-button'><i className='fa-solid fa-briefcase header-icons'></i></a>
        <a href='#projects' className='playstation-nav-button'><i className="fa-regular fa-laptop-code header-icons"></i></a>
      </div>
    </header>
  )
}
