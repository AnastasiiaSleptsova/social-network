
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.logo} src='https://i.pinimg.com/originals/60/9f/fb/609ffba0ced75161f5237042df955fed.png'></img>
        <form className={classes.search} action='#' name='search'>
          <input className={classes.input} type='search' placeholder="&#128269; search"/>
        </form>
      </header>
}

export default Header;