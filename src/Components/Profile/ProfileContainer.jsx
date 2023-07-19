import React from 'react';
import { connect } from 'react-redux';
import {
    getUserProfile,
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
        const userIdFromURL = this.props.router.params.userId || this.props.myId;
        this.props.getUserProfile(userIdFromURL);
        this.props.getProfileStatus(userIdFromURL);
    }

    componentDidUpdate() {
        const userIdFromURL = this.props.router.params.userId
        const isMyProfile = this.props.myId === this.props.profile.userId
        if (!userIdFromURL && !isMyProfile) {
            this.props.getUserProfile(this.props.myId);
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
    connect(mapStateToProps, { getUserProfile, getProfileStatus, updateProfileStatus, getAuthUserData }),
    withRouter
)(ProfileContainer)
