import React from 'react';
import {
    Navigate,
} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthNavigate = (Component) => {

    const NavigateComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/Login' />;
        return <Component {...props} />
    }
    return connect(mapStateToPropsForNavigate)(NavigateComponent);;
}

export default withAuthNavigate;


