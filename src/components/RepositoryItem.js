import React from 'react'

import '../scss/style.scss'

const RepositoryItem = props => {
    return (
        <div className="reposItem">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <span>{props.url}</span>
        </div>
    )
}

export default RepositoryItem
