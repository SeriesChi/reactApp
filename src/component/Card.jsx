import React from 'react'

export default function Card(props) {
    return (
        <div className="alignLeft description-block">
            <h3>{props.title}</h3>
            <span className="text-line-6">{props.description}</span>
        </div>
    )
}
