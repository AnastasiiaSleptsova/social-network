import React from 'react';
import { connect } from 'react-redux';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import UserList from './UserList/UserList';

const Navbar = ({ avatarList }) => {
  const generateClassName = (navData) => navData.isActive ? `${classes.item} ${classes.active}` : classes.item
  const avatarListJSX = avatarList.map(
    avatar => <UserList
      avatarItem={avatar.avatarka}
      key={avatar.id}
      alt={avatar.altAvatar} />
  );

  return (
    <nav className={classes.sidebar}>
      <NavLink className={generateClassName} to='/Profile'>Profile</NavLink>
      <NavLink className={generateClassName} to='/Messages'>Messages</NavLink>
      <NavLink className={generateClassName} to='/News'>News</NavLink>
      <NavLink className={generateClassName} to='/Music'>Music</NavLink>
      <NavLink className={generateClassName} to='/Settings'>Settings</NavLink>
      <br></br>
      <br></br>
      <br></br>
      <NavLink className={generateClassName} to='/Users'>Users</NavLink>
      <div className={classes.avatarList}>
        {avatarListJSX}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  avatarList: selectAvatarList(state)
})

const selectAvatarList = (state) => state.navbarPage.avatarList

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
