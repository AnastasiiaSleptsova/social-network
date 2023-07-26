import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getUserProfile,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
} from '../../redux/profileReducer';
import { getAuthUserData } from '../../redux/authReducer';
import Profile from './Profile';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';
import withAuthNavigate from '../HOC/withAuthNavigate';
import {
    getProfile,
    getStatus,
    getMyId,
} from '../../redux/profileSelectors'

const ProfileContainerFC = ({
    myId, 
    getUserProfile, 
    getProfileStatus, 
    profile, 
    status, 
    updateProfileStatus, 
    savePhoto}) => {

    const params = useParams();

    useEffect(() => {
        const userIdFromURL = params.userId || myId;
        getUserProfile(userIdFromURL);
        getProfileStatus(userIdFromURL);
    }, [])

    useEffect(() => {
        const userIdFromURL = params.userId
        const isMyProfile = myId === profile.userId
        if (!userIdFromURL && !isMyProfile) {
            getUserProfile(myId);
            getProfileStatus(myId);
        }
    })

    return (
        <>
            <Profile
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
                myId={myId}
                savePhoto={savePhoto}
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    myId: getMyId(state),
});

export default compose(
    withAuthNavigate,
    connect(mapStateToProps,
        { getUserProfile, getProfileStatus, updateProfileStatus, getAuthUserData, savePhoto }),
)(ProfileContainerFC)
