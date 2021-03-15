import React from 'react'

const RepositoryItem = props => {
    return (
        <div>
            <span>{props.name}</span>
            <p>{props.description}</p>
        </div>
    )
}

export default RepositoryItem
