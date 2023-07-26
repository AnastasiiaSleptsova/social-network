import { Field, reduxForm } from 'redux-form'
import classes from './Login.module.css'
import classes2 from '../Common/FormsControls/FormsControls.module.css'
import { Input } from '../../Components/Common/FormsControls/FormsControls'
import { required, maxLengthCreator, } from '../../utils/validators/validators';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const maxLength30 = maxLengthCreator(30);
const maxLength20 = maxLengthCreator(20);

const LoginForm = ({error, handleSubmit}) => {
    return <form className={classes.loginForm} onSubmit={handleSubmit}>
        <div>
            <Field
                className={classes.login}
                placeholder={"Email"}
                name={'email'}
                type={'email'}
                validae={[required, maxLength30,]}
                component={"Input"}
            />
        </div>
        <div>
            <Field
                className={classes.password}
                placeholder={"Password"}
                name='password'
                type={'password'}
                component={"Input"}
                validate={[required, maxLength20,]}
            />
        </div>
        <div>
            <Field
                className={classes.checkbox}
                component={"Input"}
                name='rememberMe'
                type={"checkbox"}
                validate={[required]}
            />
            <span>remember me</span>
        </div>
        {error && <div className={classes2.formSummeryError}>ERROR
        </div>
        }
        <div>
            <button className={classes.button}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmit = (formData) => {
        login({
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
        })
    }

    if (isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className={classes.loginPage}>
            <h1 className={classes.title}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);