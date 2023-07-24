import React from 'react';
import { connect } from 'react-redux';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import {
  getAvatarList,
} from '../../redux/navbarSelectors';

const Navbar = ({ avatarList }) => {
  const generateClassName = (navData) => navData.isActive ? `${classes.item} ${classes.active}` : classes.item

  return (
    <aside className={classes.sidebar}>
      <p className={classes.menu}>Menu</p>
      <nav className={classes.navigation}>
      <NavLink className={generateClassName} to='/Profile'>
        Profile</NavLink>
      <NavLink className={generateClassName} to='/Messages'>
        Messages</NavLink>
      <NavLink className={generateClassName} to='/News'>
        News</NavLink>
      <NavLink className={generateClassName} to='/Music'>
        Music</NavLink>
      <NavLink className={generateClassName} to='/Settings'>
        Settings</NavLink>
      <NavLink className={generateClassName} to='/Users'>
        Users</NavLink>
      </nav>
    </aside>
  )
}

const mapStateToProps = (state) => ({
  avatarList: getAvatarList(state)
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
