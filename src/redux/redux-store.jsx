// import {configureStore} from 'redux';
import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';

const reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
})

const store = createStore(reducers);

export default store;