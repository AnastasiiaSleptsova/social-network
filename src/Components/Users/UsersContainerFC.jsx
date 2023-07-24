import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    toogleFollowing,
    fetchMoreUsers,
    clearUsers,
    toggleFollowingProgress,
    getUsers,
    getUsersMore,
    setTotalUsersCount,
} from '../../redux/usersReducer';
import Users from './Users';
import withAuthNavigate from '../HOC/withAuthNavigate';
import {
    getUsersSelector,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from '../../redux/usersSelectors';
import { compose } from 'redux';

const UsersContainerFC = ({
    getUsers,
    currentPage,
    pageSize,
    users,
    toogleFollowing,
    isFetching,
    toggleFollowingProgress,
    followingInProgress,
    getUsersMore,
    clearUsers,
    setTotalUsersCount,
}) => {
    const fetchMoreUsers = () => {
        getUsersMore(currentPage, pageSize);
    }

    useEffect(() => {
        getUsers(currentPage, pageSize);
        return () => {
            console.log('!!! вот-вот будет unMount');
            clearUsers()
            setTotalUsersCount(0)
        }
    }, [])

    return (
        <>
            <Users
                fetchMoreUsers={fetchMoreUsers}
                users={users}
                toogleFollowing={toogleFollowing}
                isFetching={isFetching}
                toggleFollowingProgress={toggleFollowingProgress}
                followingInProgress={followingInProgress}
            />
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        toogleFollowing, setTotalUsersCount, fetchMoreUsers, clearUsers,
        toggleFollowingProgress, getUsers, getUsersMore,
    })
)(UsersContainerFC)
