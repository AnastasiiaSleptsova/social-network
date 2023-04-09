import React from 'react';
import { connect } from 'react-redux';
import {
    toogleFollowing,
    setFriends,
    incrementCurrentPage,
    setTotalFriendsCount,
    fetchMoreFriends,
    toggleIsFetching,
} from '../../redux/frendsReducer';
import axios from 'axios';
import Friends from './Friends';
import Preloader from '../Preloader/Preloader';


class FriendsContsiner extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resp => {
                setTimeout(() => {
                    console.log('!!! 2 sec')
                    this.props.toggleIsFetching(false);
                    this.props.setFriends(resp.data.items);
                    this.props.setTotalFriendsCount(resp.data.totalCount);
                }, 2000)
            })
    }

    fetchMoreFriends() {
        this.props.toggleIsFetching(true);
        console.log('!!! fetchMoreFriends');
        this.props.incrementCurrentPage()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.pageSize}`)
            .then(resp => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(resp.data.items);
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
        isFetching: state.friendsPage.isFetching
    }
}

const FrendsContainer = connect(mapStateToProps, {
    toogleFollowing,
    setFriends,
    incrementCurrentPage,
    setTotalFriendsCount,
    fetchMoreFriends,
    toggleIsFetching,
})(FriendsContsiner);

export default FrendsContainer;