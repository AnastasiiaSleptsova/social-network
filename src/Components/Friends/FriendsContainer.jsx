import React from 'react';
import { connect } from 'react-redux';
import { toogleFollowingAC, setFriendsAC } from '../../redux/frendsReducer';
import Frends from './Friends'

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleFollowing: (id) => {
            console.log('задиспатчили экшен');
            dispatch(toogleFollowingAC(id));
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends));
        }
    }
}

const FrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Frends);

export default FrendsContainer;
