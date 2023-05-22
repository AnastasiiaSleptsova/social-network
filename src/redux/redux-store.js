// import {configureStore} from 'redux';
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';
import friendsReducer from './frendsReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store
