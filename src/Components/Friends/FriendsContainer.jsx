import React from 'react';
import { connect } from 'react-redux';
import {
    toogleFollowing,
    fetchMoreFriends,
    clearFriends,
    toggleFollowingProgress,
    getUsers,
    getUsersMore,
    setTotalFriendsCount,
} from '../../redux/frendsReducer';
import Friends from './Friends';





class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    componentWillUnmount() {
        this.props.clearFriends()
        this.props.setTotalFriendsCount(0)
    }

    fetchMoreFriends() {
        this.props.getUsersMore(this.props.currentPage, this.props.pageSize);
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
    setTotalFriendsCount,
    fetchMoreFriends,
    clearFriends,
    toggleFollowingProgress,
    getUsers,
    getUsersMore,
})(FriendsContainer);;