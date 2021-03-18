import React from 'react'

import '../scss/style.scss'

const RepositoryItem = props => {
    let repoItem = props.error ? (
        <>
            <span>{props.error}</span>
        </>
    ) : (
        <>
            <h3>
                <span id="icon">{props.icon}</span>
                <a href={props.url} target="blank">
                    {props.name}
                </a>
            </h3>
            <p>{props.description}</p>
        </>
    )

    return <div className="reposItem">{repoItem}</div>
}

export default RepositoryItem
