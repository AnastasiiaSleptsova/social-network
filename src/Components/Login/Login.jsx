import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
// import LoginForm from './LoginForm'

const LoginForm = (props) => {
    return <form className={classes.loginForm} onSubmit={props.handleSubmit}>
        <div>
            <Field className={classes.login} placeholder={"Login"} name={'login'} component={'input'}/>
        </div>
        <div>
            <Field className={classes.password} placeholder={"Password"} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field className={classes.checkbox} component={'input'} name={'rememberMe'} type={"checkbox"} /> remember me
        </div>
        <div>
            <button className={classes.button}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('!!! formData =', formData);
    }
    return <div className={classes.loginPage}>
        <h1 className={classes.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;