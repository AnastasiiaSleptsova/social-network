
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = (props) => {
  return <header className={classes.header}>
    <img className={classes.logo} src='https://i.pinimg.com/originals/60/9f/fb/609ffba0ced75161f5237042df955fed.png'></img>
    <div className={classes.loginBlock}>
      {props.isAuth
        ? props.login
        : <NavLink className={classes.text} to={'/login'}>Login </NavLink>}
    </div>
  </header>
}

export default Header;