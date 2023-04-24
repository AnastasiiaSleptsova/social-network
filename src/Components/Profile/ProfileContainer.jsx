import React from 'react';
import { connect } from 'react-redux';
import { setFriendProfile } from '../../redux/profileReducer';
import axios from 'axios';
import Profile from './Profile';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        const friendId = this.props.router.params.friendId;
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + friendId)
            .then(resp => {
                this.props.setFriendProfile(resp.data);
            });
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
    profile: state.profilePage.profile
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

export default connect(mapStateToProps, { setFriendProfile })(withRouter(ProfileContainer));