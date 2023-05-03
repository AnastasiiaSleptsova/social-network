import React from 'react';
import {
    Navigate,
} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
});

const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to='/Login' />;
            return <Component {...this.props} />
        }
    }
   
    const ConnectAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

    return ConnectAuthNavigateComponent;
}

// const withAuthNavigate = (Component) => {
//     const NavigateComponent = (props) => {
//             if (props.isAuth) return <Navigate to='/Login' />;
//             return <Component {...props} />
//         }
//     return NavigateComponent;
// }
export default withAuthNavigate;


