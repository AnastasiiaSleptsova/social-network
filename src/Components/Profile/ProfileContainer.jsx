import React from 'react';
import { connect } from 'react-redux';
import { getFriendProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import {
    useLocation,
    useNavigate,
    useParams,
    Navigate,
} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        const friendId = this.props.router.params.friendId;
        this.props.getFriendProfile(friendId)
    }


    render() {
        if (!this.props.isAuth) return <Navigate to='/Login' />;

        return (
            <>
                <Profile {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, { getFriendProfile })(withRouter(ProfileContainer));