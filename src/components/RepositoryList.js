import React, { useState, useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { FixedSizeList as List } from 'react-window'
import useMedia from 'use-media'

import RepositoryItem from './RepositoryItem'
import * as actions from '../store/action/index'
import LoadingHolder from './LoadingHolder'
import { mainLanguage } from '../utils/utilities'

const RepositoryList = props => {
    // detect the width of window
    const widthL = useMedia({ minWidth: '769px' })
    const widthM = useMedia({ minWidth: '481px' })

    let percent

    if (widthM && !widthL) {
        percent = 0.7
    } else if (widthL && widthM) {
        percent = 0.6
    } else {
        percent = 0.9
    }

    // get public repositories side effect
    const perPage = 5
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        props.onGetPublicRepos(currentPage, perPage)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    // implement intersectionObserver API
    const observer = useRef(null)

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
                width={window.innerWidth * percent}
                itemCount={props.repos.length}
                itemSize={250}
                itemData={props.repos}
            >
                {({ index, style }) => {
                    if (props.repos.length === index + 1) {
                        return (
                            <div style={style} ref={observerRef}>
                                <RepositoryItem
                                    name={props.repos[index].name}
                                    description={props.repos[index].description}
                                    url={props.repos[index].html_url}
                                    icon={props.repos.fork ? mainLanguage() : mainLanguage(props.repos[index].language)}
                                />
                                {props.error ? <RepositoryItem error={props.error} /> : null}
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
                                    icon={props.repos.fork ? mainLanguage() : mainLanguage(props.repos[index].language)}
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

const mapStateToProps = ({ repos, loading, comingData, error }) => {
    return {
        repos,
        loading,
        comingData,
        error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPublicRepos: (page, perPage) => dispatch(actions.getPublicRepos(page, perPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
