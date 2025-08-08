import React from 'react'

export default function Footer() {
  return (
    <div className='footer-wrapper'>

         {/* email */}
       <a href="mailto:spencer24ss9@gmail.com.com" rel="noreferrer" target="_blank" className="footer-icons">
       <i className="fa-solid fa-envelope"></i>
      </a>

      {/* linkedin */}
      <a href="https://www.linkedin.com/in/spencer-samra/" rel="noreferrer" target="_blank" className='footer-icons'>
        <i className="fa-brands fa-linkedin"></i>
      </a>

     {/* github */}
      <a href="https://github.com/Spencer1923/" rel="noreferrer" target="_blank" className='footer-icons'>
        <i className="fa-brands fa-github"></i>
      </a>

    </div>
  )
}   