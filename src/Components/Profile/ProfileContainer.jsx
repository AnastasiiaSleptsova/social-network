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

const AuthNavigateComponent = withAuthNavigate(ProfileContainer)

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const withRouter = (ClassComponent) => {
    const ComponentOlegFC = (props) => {
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

    return ComponentOlegFC
}

export default connect(mapStateToProps, { getFriendProfile })(withRouter(AuthNavigateComponent));