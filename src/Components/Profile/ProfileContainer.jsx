import React from 'react';
import { connect } from 'react-redux';
import {
    getFriendProfile,
    getProfileStatus,
    updateProfileStatus,
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
class ProfileContainer extends React.Component {

    componentDidMount() {
        const friendIdFromURL = this.props.router.params.friendId || this.props.myId;
        this.props.getFriendProfile(friendIdFromURL);
        this.props.getProfileStatus(friendIdFromURL);
    }

    componentDidUpdate() {
        const friendIdFromURL = this.props.router.params.friendId
        const isMyProfile = this.props.myId === this.props.profile.userId
        if (!friendIdFromURL && !isMyProfile) {
            this.props.getFriendProfile(this.props.myId);
            this.props.getProfileStatus(this.props.myId);
        }
    }


    render() {
        return (
            <>
                <Profile {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId,
});

const withRouter = (ClassComponent) => {
    const RouterComponent = (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return (
            <ClassComponent
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }

    return RouterComponent
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, { getFriendProfile, getProfileStatus, updateProfileStatus, getAuthUserData }),
    withRouter
)(ProfileContainer)
