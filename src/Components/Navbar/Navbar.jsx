import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const generateClassName = (navData) => navData.isActive ? `${classes.item} ${classes.active}` : classes.item

  return (
    <nav className={classes.sidebar}>
      <NavLink className={generateClassName} to="/Profile">Profile</NavLink>
      <NavLink className={generateClassName} to='/Messages'>Messages</NavLink>
      <NavLink className={generateClassName} to='/News'>News</NavLink>
      <NavLink className={generateClassName} to='/Music'>Music</NavLink>
      <NavLink className={generateClassName} to='/Settings'>Settings</NavLink>
    </nav>
  )
}

export default Navbar;