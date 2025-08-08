import React from 'react'


export default function ListEntry(props) {
    const { title, date, children } = props
    return (
        <div>
            <div className='list-entry-header-wrapper'>
                <h1 className='list-entry-title'>{title}</h1>
                <h1 className='list-entry-date'>{date}</h1>
            </div>
            <ul className='list-entry-ul'>
                {children}
            </ul>
        </div>
    )
}

