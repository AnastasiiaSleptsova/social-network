import classes from './Login.module.css'
import LoginForma from './LoginForma'

const Login = (props) => {
    return <div className={classes.loginPage}>
        <h1 className={classes.title}>Login</h1>
        <LoginForma />
    </div>
}

export default Login;