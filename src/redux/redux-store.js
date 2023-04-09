// import {configureStore} from 'redux';
import {combineReducers, legacy_createStore as createStore} from "redux"; 
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';
import friendsReducer from './frendsReducer';
import authReducer from "./authReducer";

const reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
})

const store = createStore(reducers);

export default store;