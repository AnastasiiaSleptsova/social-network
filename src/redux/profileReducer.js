import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

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
        case SET_USERS_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.payload.status }
        }
        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, payload: { newPostText } });
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, payload: { profile } });
export const setStatus = (status) => ({ type: SET_STATUS, payload: { status } });


export const getUserProfile = (userId) => async (dispatch) => {
        const resp = await profileAPI.getProfileFrend(userId)
            dispatch(setUserProfile(resp));
        }; 

export const getProfileStatus = (userId) => async (dispatch) => {
        const resp = await profileAPI.getProfileStatus(userId)
            dispatch(setStatus(resp.data));
        };

export const updateProfileStatus = (status) => async (dispatch) => {
        const resp = await profileAPI.updateProfileStatus(status)
            if (resp.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        };

export default profileReducer;

