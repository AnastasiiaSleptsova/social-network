import React from 'react';
import { connect } from 'react-redux';
import {
    toogleFollowing,
    setFriends,
    incrementCurrentPage,
    setTotalFriendsCount,
    fetchMoreFriends,
    toggleIsFetching,
    clearFriends,
    toggleFollowingProgress,
} from '../../redux/frendsReducer';
import Friends from './Friends';
import { usersAPI } from '../../api/api';




class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
            this.props.setTotalFriendsCount(data.totalCount);
        })
    }
    componentWillUnmount() {
        this.props.clearFriends()
        this.props.setTotalFriendsCount(0)
    }

    fetchMoreFriends() {
        this.props.toggleIsFetching(true);
        this.props.incrementCurrentPage()

        usersAPI.getUsersMore(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(data.items);
        })
    }

    render() {
        return (
            <>
                <Friends
                    fetchMoreFriends={this.fetchMoreFriends.bind(this)}
                    friends={this.props.friends}
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
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    toogleFollowing,
    setFriends,
    incrementCurrentPage,
    setTotalFriendsCount,
    fetchMoreFriends,
    toggleIsFetching,
    clearFriends,
    toggleFollowingProgress,
})(FriendsContainer);;