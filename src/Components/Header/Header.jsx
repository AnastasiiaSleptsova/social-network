
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import logo from '../../img/pngaaa.com-2457763.png'

const Header = ({login, logout, isAuth}) => {
  const onClickHandler = () => logout()

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} />
      <div className={classes.loginBlock}>
        {isAuth
          ? <div> {login} - <button onClick={onClickHandler} className={classes.logOut}> Log out</button> </div>
          : <div className={classes.logIn}> <NavLink className={classes.text} to={'/Login'}>Login </NavLink></div>
        }
      </div>
    </header>
  )
}

export default Header;