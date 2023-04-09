import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FrendList from './FrendList/FrendList';

const Navbar = (props) => {
  const generateClassName = (navData) => navData.isActive ? `${classes.item} ${classes.active}` : classes.item
  let avatarList = props.state.avatarList.map(avatar => <FrendList avatarItem={avatar.avatarka} alt={avatar.altAvatar} />);

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
      <NavLink className={generateClassName} to='/Frends'>Frends</NavLink>
      <div className={classes.avatarList}>
        {avatarList}
      </div>
    </nav>
  )
}

export default Navbar;