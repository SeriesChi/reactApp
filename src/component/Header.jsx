import React from 'react'

const Header = ({title, description}) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Header;