import React from 'react';
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
import { compose } from 'redux';
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    componentWillUnmount() {
        this.props.clearUsers()
        this.props.setTotalUsersCount(0)
    }

    fetchMoreUsers() {
        this.props.getUsersMore(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                <Users
                    fetchMoreUsers={this.fetchMoreUsers.bind(this)}
                    users={this.props.users}
                    toogleFollowing={this.props.toogleFollowing}
                    isFetching={this.props.isFetching}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        toogleFollowing, setTotalUsersCount, fetchMoreUsers, clearUsers,
        toggleFollowingProgress, getUsers, getUsersMore,
    })
)(UsersContainer)
