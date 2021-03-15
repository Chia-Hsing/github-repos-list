import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { FixedSizeList as List } from 'react-window'

import RepositoryItem from '../components/RepositoryItem'
import * as actions from '../store/action/index'

const RepositoryList = props => {
    const perPage = 4
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        props.getPublicReposHandler(currentPage, perPage)

        // setCurrentPage(prevState => prevState + 1)
    }, [props])

    return (
        <section>
            <ul>
                <List
                    className="List"
                    height={window.innerHeight}
                    // width={listWidth}
                    itemCount={props.repos.length}
                    // itemSize={isTablet ? 250 : 200}
                    itemData={props.repos}
                    itemSize={35}
                    width={300}
                >
                    {({ index }) => {
                        return (
                            <li>
                                <RepositoryItem
                                    name={props.repos[index].name}
                                    description={props.repos[index].description}
                                />
                            </li>
                        )
                    }}
                </List>
            </ul>
        </section>
    )
}

const mapStateToProps = state => {
    return { repos: state.repos }
}

const mapDispatchToProps = dispatch => {
    return {
        getPublicReposHandler: (page, perPage) => dispatch(actions.getPublicRepositories(page, perPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)
