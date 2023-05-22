import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_FRIENDS_PROFILE = 'SET_FRIENDS_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    postList: [
        { id: 1, text: 'Hi! Who is here?', like: '5' },
        { id: 2, text: 'Hello, it\'s me', like: '3' }
    ],
    newPostText: '',
    profile: {},
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postList.length + 1,
                text: state.newPostText,
                like: '0'
            }
            return {
                ...state,
                postList: [...state.postList, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.payload.text }
        }
        case SET_FRIENDS_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        case SET_STATUS: {
            return { ...state, profile: { ...state.profile, status: action.payload.status } }
        }
        default:
            return state;
    }
    
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, payload: { text } });
export const setFriendProfile = (profile) => ({ type: SET_FRIENDS_PROFILE, payload: { profile } });
export const setStatus = (status) => ({ type: SET_STATUS, payload: { status } });


export const getFriendProfile = (friendId) => {
    return (dispatch) => {
        profileAPI.getProfileFrend(friendId).then(resp => {
            dispatch(setFriendProfile(resp));
        });
    }
}
export const getProfileStatus = (friendId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(friendId).then(resp => {
            dispatch(setStatus(resp.data));
        });
    }
}
export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;

