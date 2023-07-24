import React from 'react';
import Header from './Header';
import {logout } from '../../redux/authReducer';
import { connect } from 'react-redux';
import {
  getIsAuth,
  getLogin,
} from '../../redux/headerSelectors';


const HeaderContainer = (props) => {

    return <Header {...props}  />
  }
  
const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export default connect(mapStateToProps, {logout })(HeaderContainer);