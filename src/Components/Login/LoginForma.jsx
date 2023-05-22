import classes from './Login.module.css'

const LoginForma = (props) => {
    return <form className={classes.loginForm}>
        <div>
            <input placeholder={"Login"} />
        </div>
        <div>
            <input placeholder={"Password"} />
        </div>
        <div>
            <input type={"checkbox"} />
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export default LoginForma;