import React from 'react';
import { connect } from 'react-redux';
import {
    getFriendProfile,
    getProfileStatus,
    updateProfileStatus,
} from '../../redux/profileReducer';
import Profile from './Profile';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import withAuthNavigate from '../HOC/withAuthNavigate';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let friendId = this.props.router.params.friendId;
        if (!friendId) {
            friendId = 28941;
        };
        this.props.getFriendProfile(friendId);
        this.props.getProfileStatus(friendId);
    }


    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateProfileStatus={this.props.updateProfileStatus} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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
    connect(mapStateToProps, { getFriendProfile, getProfileStatus, updateProfileStatus, }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
