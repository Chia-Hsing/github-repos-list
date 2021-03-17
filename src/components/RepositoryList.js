import React, { useState, useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { FixedSizeList as List } from 'react-window'

import RepositoryItem from './RepositoryItem'
import * as actions from '../store/action/index'
import LoadingHolder from './LoadingHolder'

const RepositoryList = props => {
    const perPage = 4
    const [currentPage, setCurrentPage] = useState(1)
    const observer = useRef(null)

    useEffect(() => {
        props.onGetPublicRepos(currentPage, perPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const observerRef = useCallback(
        node => {
            if (observer.current) observer.current.disconnect()

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting && props.comingData && !props.loading)
                    setCurrentPage(prevState => prevState + 1)
            })

            if (node) observer.current.observe(node)
            return () => observer.current.disconnect()
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.loading, props.comingData]
    )

    let reposList =
        props.repos.length > 0 ? (
            <List
                className="List"
                height={window.innerHeight}
                itemCount={props.repos.length}
                itemSize={230}
                itemData={props.repos}
                width={700}
            >
                {({ index, style }) => {
                    if (props.repos.length === index + 1) {
                        return (
                            <div style={style} ref={observerRef}>
                                <RepositoryItem
                                    name={props.repos[index].name}
                                    description={props.repos[index].description}
                                    url={props.repos[index].html_url}
                                />
                                {props.comingData ? <LoadingHolder /> : null}
                            </div>
                        )
                    } else {
                        return (
                            <div style={style}>
                                <RepositoryItem
                                    name={props.repos[index].name}
                                    description={props.repos[index].description}
                                    url={props.repos[index].html_url}
                                />
                            </div>
                        )
                    }
                }}
            </List>
        ) : (
            <LoadingHolder />
        )

    return <section className="reposList">{reposList}</section>
}

const mapStateToProps = ({ repos, loading, comingData }) => {
    return {
        repos,
        loading,
        comingData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPublicRepos: (page, perPage) => dispatch(actions.getPublicRepos(page, perPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
