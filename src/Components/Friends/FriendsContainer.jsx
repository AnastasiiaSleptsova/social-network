import React from 'react';
import { connect } from 'react-redux';
import { toogleFollowingAC } from '../../redux/frendsReducer';
import Frends from './Friends'

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleFollowing: (id) => {
            dispatch(toogleFollowingAC(id));
        },
    }
}

const FrendsContainer = connect(mapStateToProps, mapDispatchToProps)(Frends);

export default FrendsContainer;
