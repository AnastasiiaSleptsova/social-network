import React from 'react';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount() {
    usersAPI.setUserData().then(resp => {
      if (resp.data.resultCode === 0) {
        const { userId, login, email } = resp.data.data;
        this.props.setAuthUserData(userId, email, login,);
      }
    });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);