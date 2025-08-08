import React from 'react'

export default function SectionIntroduction(props) {
    const { children, dark } = props
    return (
        <div className='section-introduction-header-text'>
            <div className={(dark ? 'section-introduction-line-dark' : 'section-introduction-line')}></div>
            <h1 className={(dark ? 'section-introduction-text-dark' : 'section-introduction-text')}>{children}</h1>
            <div className={(dark ? 'section-introduction-line-dark' : 'section-introduction-line')}></div>
        </div>
    )
}