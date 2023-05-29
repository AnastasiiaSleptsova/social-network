import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
import { Input } from '../../Components/Common/FormsControls/FormsControls'
import { required , maxLengthCreator, } from '../../utils/validators/validators';
import React from 'react';

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
    return <form className={classes.loginForm} onSubmit={props.handleSubmit}>
        <div>
            <Field
                className={classes.login}
                placeholder={"Login"}
                name={'login'} component={Input}
                validate={[required, maxLength20,]} />
        </div>
        <div>
            <Field
                className={classes.password}
                placeholder={"Password"}
                name={'password'}
                component={Input}
                validate={[required, maxLength20,]} />
        </div>
        <div>
            <Field
                className={classes.checkbox}
                component={Input}
                name={'rememberMe'}
                type={"checkbox"}
                validate={[required, maxLength20,]} /> remember me
        </div>
        <div>
            <button className={classes.button}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('!!! formData =', formData);
    }
    return <div className={classes.loginPage}>
        <h1 className={classes.title}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;