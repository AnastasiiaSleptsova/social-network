import classes from './Login.module.css'

const LoginForm = (props) => {
    return <form className={classes.loginForm}>
        <div>
            <input className={classes.login} placeholder={"Login"} />
        </div>
        <div>
            <input className={classes.password} placeholder={"Password"} />
        </div>
        <div>
            <input className={classes.checkbox} type={"checkbox"} /> remember me
        </div>
        <div>
            <button className={classes.button}>Login</button>
        </div>
    </form>
}

export default LoginForm;