import React from 'react';
import Header from './Header';
import {logout } from '../../redux/authReducer';
import { connect } from 'react-redux';
import {
  getIsAuth,
  getLogin,
} from '../../redux/headerSelectors';


const HeaderContainer = (props) => {

    return <Header login = {props.login} logout={props.logout} isAuth={props.isAuth} />
  }
  
const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export default connect(mapStateToProps, {logout })(HeaderContainer);