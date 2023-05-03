import React from 'react';
import { connect } from 'react-redux';
import { getFriendProfile } from '../../redux/profileReducer';
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
        const friendId = this.props.router.params.friendId;
        this.props.getFriendProfile(friendId)
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
    connect(mapStateToProps, { getFriendProfile }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
