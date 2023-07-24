
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import logo from '../../img/pngaaa.com-2457763.png'

const Header = (props) => {
  const onClickHandler = () => props.logout()

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} />
      <div className={classes.loginBlock}>
        {props.isAuth
          ? <div> {props.login} - <button onClick={onClickHandler} className={classes.logOut}> Log out</button> </div>
          : <div className={classes.logIn}> <NavLink className={classes.text} to={'/Login'}>Login </NavLink></div>
        }
      </div>
    </header>
  )
}

export default Header;