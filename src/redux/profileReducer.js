import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST';
const SET_FRIENDS_PROFILE = 'SET_FRIENDS_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    postList: [
        { id: 1, text: 'Hi! Who is here?', like: '5' },
        { id: 2, text: 'Hello, it\'s me', like: '3' }
    ],
    profile: {},
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postList.length + 1,
                text: action.payload.newPostText,
                like: '0'
            }
            return {
                ...state,
                postList: [...state.postList, newPost],
                newPostText: ''
            }
        }
        case SET_FRIENDS_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        case SET_STATUS: {
            return { ...state,  status: action.payload.status } 
        }
        default:
            return state;
    }
    
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, payload: { newPostText }  });
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

